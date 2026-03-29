# DesignDot - Empowered Workplaces

A high-performance, pixel-perfect web application built for **Accountants and Global Business Advisors**. This project focuses on delivering a premium, visually stunning experience with a specialized layout system for international business advisory services between India, Japan, and the world.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Modern CSS engine)
- **Tooling**: [React Compiler](https://react.dev/learn/react-compiler) (Babel) for optimized rendering performance.
- **Fonts**: Poppins & Source Sans Pro for a professional aesthetic.

## 🎨 Design Philosophy: Pixel-Perfect Scaling

The application follows a strict **Pixel-Perfect Design** methodology:
- **1920px Base**: All components are architected on a 1920px canvas base to ensure exact alignment with design mockups.
- **Dynamic Scaling**: Implements a custom CSS scaling engine (`--slider-scale`) that maintains layout integrity across all desktop resolutions without layout shifts.
- **Rich Aesthetics**: Utilizes advanced CSS techniques including tilted containers, glassmorphism-inspired overlays, and custom SVG pathing for unique UI elements.

## 🛠️ Initialization Process

1.  **Core Setup**: Initialized with `create-next-app` using the latest experimental features for React 19 and Next.js 16.
2.  **Modern Styling**: Integrated Tailwind CSS 4, utilizing the new `@import "tailwindcss"` syntax and post-processing for minimal bundle size.
3.  **Layout Architecture**: Established a global responsive scaling system in `globals.css` to allow absolute-positioned elements to remain responsive.

## 🏁 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
