import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { portfolioData } from "@/lib/data";

// Mark route as dynamic
export const dynamic = "force-dynamic";

interface GitHubStats {
  followers: number;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: string[];
  lastUpdated: string | null;
}

export async function GET(request: NextRequest) {
  try {
    const githubUsername = portfolioData.githubUsername;
    const statsFilePath = path.join(process.cwd(), "data", "github-stats.json");

    // Optional: Check for secret key in headers (for cron job protection)
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;
    const isCronJob = cronSecret && authHeader === `Bearer ${cronSecret}`;

    // If not a cron job, try to return existing data from JSON file first
    if (!isCronJob) {
      try {
        const existingData = await fs.readFile(statsFilePath, "utf-8");
        const stats = JSON.parse(existingData);
        // Return existing data if available
        if (stats.lastUpdated) {
          return NextResponse.json(stats);
        }
      } catch (error) {
        // File doesn't exist or is invalid, continue to fetch from GitHub
      }
    }

    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/${githubUsername}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!userResponse.ok) {
      // If rate limited or error, return existing data if available
      try {
        const existingData = await fs.readFile(statsFilePath, "utf-8");
        const stats = JSON.parse(existingData);
        return NextResponse.json({
          ...stats,
          error: "Failed to fetch from GitHub API",
        });
      } catch {
        return NextResponse.json(
          { error: "Failed to fetch GitHub stats" },
          { status: userResponse.status }
        );
      }
    }

    const userData = await userResponse.json();

    // Fetch repositories (limit to first 20 to reduce API calls)
    const reposResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=20&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    let totalStars = 0;
    let totalForks = 0;
    const languages: { [key: string]: number } = {};

    if (reposResponse.ok) {
      const repos = await reposResponse.json();

      // Process repos for stars and forks
      repos.forEach((repo: any) => {
        totalStars += repo.stargazers_count || 0;
        totalForks += repo.forks_count || 0;
      });

      // Only fetch languages for top 5 repos to minimize API calls
      const topRepos = repos.slice(0, 5);
      for (const repo of topRepos) {
        if (repo.languages_url) {
          try {
            const langResponse = await fetch(repo.languages_url, {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
            });

            if (langResponse.ok) {
              const langData = await langResponse.json();
              Object.keys(langData).forEach((lang: string) => {
                languages[lang] = (languages[lang] || 0) + langData[lang];
              });
            }
          } catch (e) {
            // Ignore language fetch errors
          }
        }
      }
    }

    // Get top 5 languages
    const topLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang]) => lang);

    const stats: GitHubStats = {
      followers: userData.followers || 0,
      publicRepos: userData.public_repos || 0,
      totalStars,
      totalForks,
      topLanguages,
      lastUpdated: new Date().toISOString(),
    };

    // Save to JSON file
    await fs.writeFile(statsFilePath, JSON.stringify(stats, null, 2), "utf-8");

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);

    // Try to return existing data if available
    try {
      const statsFilePath = path.join(
        process.cwd(),
        "data",
        "github-stats.json"
      );
      const existingData = await fs.readFile(statsFilePath, "utf-8");
      const stats = JSON.parse(existingData);
      return NextResponse.json({
        ...stats,
        error: "Failed to update stats",
      });
    } catch {
      return NextResponse.json(
        { error: "Failed to fetch GitHub stats" },
        { status: 500 }
      );
    }
  }
}
