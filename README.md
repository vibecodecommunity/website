
# Vibecode Community Hub

A comprehensive platform for the emerging practice of Vibe Coding, leveraging AI-assisted programming tools to empower developers, enthusiasts, startups, and creators.

## 🚀 Mission

Empower users to use AI-assisted programming efficiently and creatively through curated resources, dynamic community interactions, and up-to-date industry news.

## ✨ Features

- **📰 News Feed** - Stay updated on AI development tools, industry news, and influencer insights
- **🛠️ Tools Directory** - Discover and compare AI coding tools with community reviews
- **📚 Knowledge Hub** - Access guides and tutorials for all skill levels
- **🌟 Projects Showcase** - Browse community creations and share your own work
- **💬 Community Forum** - Discuss techniques, share prompts, and get help
- **🎙️ Events & Webinars** - Participate in workshops, hackathons, and live sessions

## 🛠️ Getting Started

### Prerequisites

This project uses `pnpm` as the package manager. Make sure you have it installed:

```bash
npm install -g pnpm
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/vibecode-community.git
cd vibecode-community
pnpm install
```

### Development

Run the development server:

```bash
pnpm run dev
```

### Build

Build for production:

```bash
pnpm run build
```

## 📝 Content Management

### Adding News Articles

Create a new `.md` or `.mdx` file in `src/content/news` with the following structure:

```md
---
title: 'Article Title'
description: 'Brief description'
pubDate: 'Mar 15 2025'
category: 'Product Updates'
featured: true
imageUrl: '/images/article-image.png'
tags: ['ai', 'tools', 'updates']
---

Your article content here...
```

### Adding Tools

Create a new `.md` or `.mdx` file in `src/content/tools` with:

```md
---
name: 'Tool Name'
description: 'Tool description'
category: 'IDE Integration'
rating: 4.8
featured: true
imageUrl: '/images/tool-logo.png'
pricing: 'Free / $10/month'
website: 'https://tool-website.com'
pros: ['Easy to use', 'Great for beginners']
cons: ['Limited free tier']
tags: ['code-generation', 'ide']
---

Detailed tool information...
```

### Adding Learning Resources

Create a new `.md` or `.mdx` file in `src/content/learn` with:

```md
---
title: 'Tutorial Title'
description: 'Brief description'
pubDate: 2025-03-15
category: 'beginner'
duration: '15 min'
featured: false
level: 'beginner'
imageUrl: '/images/tutorial-image.png'
tags: ['getting-started', 'prompts']
---

Your tutorial content here...
```

## ⚙️ Configuration

- Update `src/config.ts` to modify site metadata and code highlighting options
- Customize styling in `tailwind.config.mjs`
- Add custom components in `src/components/`

## 🖌️ Styling

This project uses a neobrutalism design style with Tailwind CSS, inspired by [neobrutalism.dev](https://neobrutalism.dev/) components. To modify the styling:

1. Update color schemes in `tailwind.config.mjs`
2. Modify component styles in their respective files
3. Update global styles in `src/layouts/Base.astro`
4. Check out [neobrutalism.dev](https://neobrutalism.dev/) for more styling guidance and components

## 🔗 Technologies

- [Astro](https://astro.build/) - Web framework
- [React](https://reactjs.org/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [MDX](https://mdxjs.com/) - Enhanced Markdown

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
