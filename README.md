# Kashaf Fatima – SQA Portfolio Website

A modern, production-ready Software Quality Assurance portfolio built with React 18, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

Output is in the `dist/` directory.

## 🌐 Deploy to Netlify

### Option 1: GitHub → Netlify (Recommended)

1. Push this project to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and click "Add new site"
3. Choose "Import an existing project" → GitHub
4. Select your repository
5. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Add environment variables (optional, for EmailJS)
7. Click Deploy!

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📧 EmailJS Setup (Contact Form)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service and email template
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. In Netlify: Add these as **Environment Variables** in Site Settings

### EmailJS Template Variables
Your template should use these variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message body

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| Vite | Build Tool |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router DOM | Routing |
| React Icons | Icon Library |
| EmailJS | Contact Form |
| React Type Animation | Typing Effect |
| React CountUp | Animated Counters |
| React Hot Toast | Notifications |

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── MouseGlow.tsx
│   └── ScrollToTop.tsx
├── sections/       # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── GitHubShowcase.tsx
│   └── Contact.tsx
├── pages/          # Page components
│   └── Home.tsx
├── data/           # Portfolio data
│   └── portfolioData.ts
├── hooks/          # Custom React hooks
│   ├── useMouseGlow.ts
│   └── useScrollAnimation.ts
├── utils/          # Utility functions
│   └── animations.ts
├── App.tsx
├── main.tsx
└── index.css
```

## ✨ Features

- 🎨 **Premium Dark Design** with glassmorphism, gradients, and cyber aesthetics
- 🎬 **Rich Animations** using Framer Motion (page transitions, scroll reveals, particles)
- 📱 **Fully Responsive** for all screen sizes
- ⚡ **Performance Optimized** with code splitting and lazy loading
- 🔍 **SEO Ready** with meta tags, Open Graph, Twitter Cards, sitemap.xml
- 📧 **Contact Form** with EmailJS integration
- 🖱️ **Mouse Glow Effect** for premium feel
- 📊 **Animated Counters** on stats and achievements
- 🗂️ **Filterable Projects** with expandable modals
- 🌐 **GitHub Showcase** with repository cards

## 📄 License

MIT License – Kashaf Fatima, 2026
