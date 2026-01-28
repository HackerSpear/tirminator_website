# TIRMINATOR Website

A modern Next.js + TypeScript website for TIRMINATOR, built for deployment on Vercel.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **Bootstrap 5** - CSS framework (via CDN)
- **Vercel** - Deployment platform

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── Navigation.tsx              # Header navigation
│   ├── HeroSection.tsx             # Hero section
│   ├── FeaturesSection.tsx         # Features section
│   ├── HowItWorksSection.tsx       # How it works section
│   ├── FAQSection.tsx              # FAQ accordion
│   ├── ContactSection.tsx          # Contact form
│   └── Footer.tsx                  # Footer
├── public/
│   └── assets/
│       ├── images/                 # All images
│       └── css/
│           └── style.css           # Main stylesheet
└── lib/                            # Utility functions (if needed)
```

## 🛠️ Getting Started

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment on Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed!

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 🔧 Configuration

### Contact Form API

The contact form sends data to:
- **Endpoint**: `https://dev.TIRMINATOR.com/website/send-email`
- **Method**: POST
- **Body**: `{ name, email, description }`

The API route is located at `/app/api/contact/route.ts` and can be modified to use a different endpoint or add additional functionality.

## 📦 Features

- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ Server-side API routes
- ✅ Optimized images with Next.js Image component
- ✅ SEO-friendly structure
- ✅ Contact form with validation
- ✅ Modern React hooks and patterns

## 🔄 Migration Notes

This project was migrated from a static HTML/CSS/JS website to Next.js + TypeScript. Key changes:

- HTML converted to React components
- JavaScript converted to TypeScript
- Form handling moved to API route
- Images optimized with Next.js Image component
- CSS preserved as-is in public directory
- All assets moved to public directory

## 📄 License

©2026, All rights reserved.
