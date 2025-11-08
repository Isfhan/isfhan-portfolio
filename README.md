# Portfolio Website - Neo Brutalism Design

A modern, responsive portfolio website built with Next.js 13, featuring a Neo Brutalism UI design with bold borders, bright colors, and high contrast. The site includes dynamic GitHub statistics that are automatically updated daily via a Vercel cron job.

## Features

- 🎨 **Neo Brutalism Design** - Bold borders, bright colors, sharp corners, and high contrast
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 13 App Router
- 🔄 **Auto-updating GitHub Stats** - Daily updates via Vercel cron job
- 🎯 **Easy Customization** - All data centralized in one file
- 🌈 **Dynamic Background** - Scroll-based color transitions
- ✨ **Smooth Animations** - Enhanced user experience with animations

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Runtime**: Bun 1.x
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Animate.css
- **Language**: TypeScript
- **Deployment**: Vercel (with Bun runtime)

## Getting Started

### Prerequisites

- **Bun 1.0+** (recommended) or Node.js 22+
- Bun package manager (or npm/yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd isfhan-portfolio
```

2. Install dependencies:
```bash
bun install
# or
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All portfolio data is centralized in `lib/data.ts` for easy customization. Simply update the data in this file to personalize your portfolio.

### Personal Information

Edit the `personal` object in `lib/data.ts`:

```typescript
personal: {
  firstName: "Your",
  lastName: "Name",
  fullName: "Your Full Name",
  greeting: "Hi, I'm Your Name. Nice to meet you.",
  image: "/your-image.jpg", // Place image in public folder
}
```

### GitHub Username

Update your GitHub username:

```typescript
githubUsername: "your-github-username",
```

### Work Experience

Add or modify work experiences in the `work` array:

```typescript
work: [
  {
    title: "Your Job Title",
    period: "01/2024 - Present",
    description: "Your job description...",
    bgColor: "bg-neo-yellow", // Choose from: bg-neo-yellow, bg-neo-cyan, bg-neo-pink, bg-white
  },
  // Add more work experiences...
]
```

### Education

Update education entries:

```typescript
education: [
  {
    degree: "Your Degree",
    date: "2020 - 2024",
    institution: "Your University",
    bgColor: "bg-neo-cyan",
  },
  // Add more education entries...
]
```

### Skills

Customize your skills:

```typescript
skills: {
  professional: ["SKILL 1", "SKILL 2", ...],
  webDevelopment: ["TECH 1", "TECH 2", ...],
  ai: ["AI TECH 1", "AI TECH 2", ...],
}
```

### Certifications

Add your certifications:

```typescript
certifications: [
  {
    title: "Certification Name",
    provider: "Provider Name",
    image: "/cert-image.png", // Place in public folder
    link: "https://certificate-url.com",
    bgColor: "bg-neo-yellow",
  },
  // Add more certifications...
]
```

### Social Links

Update your social media links:

```typescript
social: [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: LinkedinIcon,
  },
  // Add more social links...
]
```

### Resume

Update the resume file path:

```typescript
resume: "/Your-Resume.pdf", // Place PDF in public folder
```

## GitHub Stats Configuration

The portfolio automatically fetches and displays GitHub statistics. The stats are updated daily via a Vercel cron job.

### How It Works

1. **Cron Job**: Vercel cron job runs daily at midnight UTC (`0 0 * * *`)
2. **API Route**: The cron job calls `/api/github-stats` endpoint
3. **GitHub API**: The API route fetches data from GitHub API
4. **JSON Storage**: Stats are saved to `data/github-stats.json`
5. **Frontend**: The About page reads from the JSON file via the API endpoint

### Setting Up Cron Job

The cron job is configured in `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/github-stats",
      "schedule": "0 0 * * *"
    }
  ]
}
```

**Note**: Vercel cron jobs are only available on Pro plans or higher. For free plans, you can:

1. Use an external cron service (e.g., cron-job.org, EasyCron)
2. Set up GitHub Actions with a scheduled workflow
3. Manually trigger the API endpoint when needed

### Optional: API Route Protection

To protect the API route from unauthorized access, set a `CRON_SECRET` environment variable in Vercel:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add `CRON_SECRET` with a secure random string
4. Update your cron job service to include the header: `Authorization: Bearer <your-secret>`

The API route will check for this secret when called. If not set, the route is publicly accessible.

### Manual Update

You can manually trigger a GitHub stats update by calling:

```bash
curl https://your-domain.com/api/github-stats
```

Or visit the URL in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Add environment variables if needed (e.g., `CRON_SECRET`)
5. Deploy!

The cron job will automatically start running once deployed.

### Environment Variables

Optional environment variables:

- `CRON_SECRET`: Secret key for protecting the API route (optional)

## Project Structure

```
isfhan-portfolio/
├── app/
│   ├── api/
│   │   └── github-stats/
│   │       └── route.ts          # API route for GitHub stats
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── Certifications/
│   ├── Education/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── ScrollBackground/
│   ├── Skills/
│   ├── TypewriterText/
│   └── Work/
├── data/
│   └── github-stats.json         # GitHub stats storage
├── lib/
│   ├── data.ts                   # Centralized portfolio data
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── vercel.json                   # Vercel cron configuration
└── README.md                     # This file
```

## Color Palette

The portfolio uses a Neo Brutalism color palette:

- **Yellow**: `#FFE66D` (bg-neo-yellow)
- **Cyan**: `#06FFA5` (bg-neo-cyan)
- **Pink**: `#FF6B9D` (bg-neo-pink)
- **White**: `#FFFFFF` (bg-white)
- **Black**: `#000000` (border-black)

## Customization Tips

1. **Colors**: Update colors in `tailwind.config.js` under the `neo` color palette
2. **Fonts**: Change fonts in `app/layout.tsx`
3. **Animations**: Modify animation delays in component files
4. **Layout**: Adjust spacing and sizing using Tailwind classes

## Troubleshooting

### GitHub Stats Not Updating

1. Check if the cron job is configured correctly in `vercel.json`
2. Verify the API route is accessible: `https://your-domain.com/api/github-stats`
3. Check Vercel logs for any errors
4. Ensure `githubUsername` is correct in `lib/data.ts`

### Build Errors

1. Make sure all dependencies are installed: `npm install`
2. Check TypeScript errors: `npm run build`
3. Verify all image paths in `public/` folder exist

### Cron Job Not Running

1. Verify you're on a Vercel Pro plan (cron jobs require Pro+)
2. Check Vercel dashboard for cron job status
3. Consider using an external cron service for free plans

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
