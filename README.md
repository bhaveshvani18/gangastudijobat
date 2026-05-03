# Ganga Studio - Luxury Cinematic Wedding Photography Website

A premium, high-end, mobile-first, responsive, and SEO-optimized photography portfolio website for Ganga Studio by Kuldeep Vani.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **GSAP** - Advanced scroll animations
- **Lenis** - Smooth scrolling
- **Lucide React** - Icon library

## Features

- Cinematic hero section with video background
- Interactive portfolio gallery with masonry grid
- Netflix-style wedding stories
- Luxury service cards with pricing
- Horizontal scrolling video reels
- Client testimonials with carousel
- Conversion-optimized booking form
- WhatsApp integration
- SEO-optimized structure with Schema markup
- Mobile-first responsive design
- Smooth scroll animations
- Film grain overlay effect

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ganga-studio.git
cd ganga-studio
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to the `/public/images/` directories

4. Add your videos to the `/public/videos/` directories

5. Update contact information in `/app/lib/constants.ts`

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
ganga-studio/
├── app/
│   ├── sections/         # Page sections
│   ├── components/       # Shared components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities & constants
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── public/
│   ├── images/           # Image assets
│   └── videos/           # Video assets
├── components/ui/        # shadcn/ui components
├── tailwind.config.ts    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `--color-matte-black: #0a0a0a`
- `--color-cinematic-red: #c41e3a`
- `--color-cinematic-gold: #d4af37`

### Contact Information
Update `/app/lib/constants.ts` with your actual:
- Phone number
- Email address
- WhatsApp link
- Instagram link
- Physical address

### Images
Replace placeholder images in `/public/images/` with your actual photography:
- `/images/hero/hero-bg.jpg` - Hero background
- `/images/portfolio/` - Portfolio images
- `/images/stories/` - Wedding story thumbnails
- `/images/about/` - About section images
- `/images/testimonials/` - Client photos

### Videos
Replace placeholder videos in `/public/videos/`:
- `/videos/hero-reel.mp4` - Hero background video
- `/videos/story-*-teaser.mp4` - Story teasers
- `/videos/reel-*.mp4` - Cinematic reels

## SEO Optimization

The website includes:
- Meta tags and Open Graph tags
- Schema.org structured data
- Semantic HTML structure
- Optimized image loading with next/image
- Sitemap and robots.txt ready

## Performance

- Lazy loading for images
- Video optimization
- Code splitting
- Optimized Core Web Vitals
- Responsive image loading

## License

This project is proprietary and confidential. All rights reserved by Ganga Studio.

## Contact

For support or inquiries:
- Email: hello@gangastudiojobat.com
- Phone: +91-XXXXXXXXXX
- Instagram: [@gangastudiojobat](https://www.instagram.com/gangastudiojobat/)

---

Built with ❤️ by Ganga Studio Team
