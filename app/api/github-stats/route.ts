import { NextRequest, NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const githubUsername = portfolioData.githubUsername;

    // Fallback data in case of API failure
    const fallbackStats = {
      followers: 0,
      publicRepos: 0,
      totalStars: 0,
      totalForks: 0,
      topLanguages: ["TypeScript", "JavaScript"],
      lastUpdated: new Date().toISOString(),
    };

    try {
      // Fetch user data
      const userResponse = await fetch(
        `https://api.github.com/users/${githubUsername}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );

      if (!userResponse.ok) {
        console.error("GitHub API user fetch failed:", userResponse.status);
        return NextResponse.json(fallbackStats);
      }

      const userData = await userResponse.json();

      // Fetch repositories to calculate stats
      const reposResponse = await fetch(
        `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );

      let totalStars = 0;
      let totalForks = 0;
      const languageCount: Record<string, number> = {};

      if (reposResponse.ok) {
        const repos = await reposResponse.json();

        // Calculate total stars and forks
        repos.forEach((repo: any) => {
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;

          // Count languages
          if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
          }
        });
      }

      // Get top 5 languages
      const topLanguages = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([lang]) => lang);

      const stats = {
        followers: userData.followers || 0,
        publicRepos: userData.public_repos || 0,
        totalStars,
        totalForks,
        topLanguages: topLanguages.length > 0 ? topLanguages : ["TypeScript", "JavaScript"],
        lastUpdated: new Date().toISOString(),
      };

      return NextResponse.json(stats);
    } catch (error) {
      console.error("GitHub Stats API Error:", error);
      return NextResponse.json(fallbackStats);
    }
  } catch (fatalError) {
    console.error("Fatal error in GitHub Stats API:", fatalError);
    return NextResponse.json(
      { error: "Fatal Error" },
      { status: 500 }
    );
  }
}
