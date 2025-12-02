<<<<<<< HEAD
nov 2025 update: currently working on updating it with vite and tailwind...COMING SOON!!

this is my personal website

i built it with react.js a while ago
=======
# Dhruv's Personal Website

A modern, aesthetic, animated personal website built with Next.js, TailwindCSS, Framer Motion, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Clean, minimalist, premium aesthetic inspired by Apple.com and Linear.app
- **Smooth Animations**: Tasteful animations throughout using Framer Motion
- **Dark Mode**: Dark mode first with smooth theme toggle animation
- **Responsive**: Fully responsive design for all devices
- **Easter Egg**: Type "waterloo" anywhere to trigger a fun UW goose animation! 🦢
- **SEO Optimized**: Proper metadata and SEO configuration

## 📁 Project Structure

```
├── app/
│   ├── (components)/
│   ├── about/
│   ├── projects/
│   │   └── [id]/
│   ├── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── easter-egg.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── page-transition.tsx
│   ├── section-wrapper.tsx
│   └── theme-provider.tsx
└── lib/
    └── utils.ts
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **shadcn/ui** - High-quality component library
- **lucide-react** - Icon library
- **next-themes** - Theme management

## 🎨 Pages

1. **Home** - Hero section with animated gradient background, about preview, and currently working on section
2. **About** - Timeline of journey, outside interests, and headshot
3. **Projects** - Responsive grid of project cards with hover animations and detail pages
4. **Contact** - Elegant contact form with social links

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

- Update personal information in each page component
- Modify project data in `app/projects/[id]/page.tsx`
- Adjust colors and gradients in `app/globals.css`
- Customize animations in component files

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Apple.com, Linear.app, and modern portfolio sites
- Built with love for the University of Waterloo 🦢
>>>>>>> f7e0bacff28dd8435d2aebc181cd12e36cf72d29

