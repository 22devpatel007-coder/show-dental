<div align="center">

# 🦷 Dental Clinic Website

A modern, responsive dental clinic website built with **React 19**, **TypeScript**, and **Tailwind CSS 4** — designed to help dental practices establish a professional online presence, showcase services, and make it easy for patients to book appointments and get in touch.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-show--dental.vercel.app-2563eb?style=for-the-badge)](https://show-dental.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

[Live Demo](https://show-dental.vercel.app/) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## Overview

This project is a complete, production-ready **dental clinic landing page** template. It's built for real-world use — dentists, dental startups, and healthcare freelancers can drop in their own clinic data and deploy a professional website without rebuilding the frontend from scratch.

The entire site is driven by a single **typed configuration object** (`ClinicConfig`), which means every section — hero copy, doctor bio, services, testimonials, gallery, and contact details — updates automatically when you edit one file. No hunting through JSX for hardcoded text.

## Live Demo

**🔗 [https://show-dental.vercel.app/](https://show-dental.vercel.app/)**

## Features

- Responsive, mobile-first layout across mobile, tablet, and desktop
- Sticky navigation bar with smooth-scroll anchor links and a mobile drawer menu
- Hero section with clinic branding, trust badges, and dual call-to-action buttons
- About Doctor section with bio, credentials, and achievements
- Services showcase with icon-based cards
- "Why Choose Us" value proposition grid
- Patient testimonials with star ratings and verified badges
- Frequently Asked Questions section
- Image gallery with category filtering and a full-screen lightbox
- Appointment request form with client-side validation, a booking confirmation screen, and local persistence
- Click-to-call and click-to-email links
- WhatsApp contact button (inline and floating)
- Embedded Google Maps location frame
- Subtle, purposeful animations (fade/slide transitions)
- Single-source clinic configuration — rebrand the entire site by editing one data file

## Not Yet Implemented

Being upfront about current scope:

- **No backend or database.** The appointment form simulates submission and stores bookings in the browser's `localStorage` — it does not send data to a server or email service.
- **No admin dashboard or CMS.** Content is edited directly in the config file, not through a UI.
- **No authentication or patient portal.**

These are listed under [Future Improvements](#future-improvements) below.

## Tech Stack

**Frontend**
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
- [Vite 6](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [Lucide React](https://lucide.dev/) — icon set
- [Motion](https://motion.dev/) — animation library

**Deployment**
- [Vercel](https://vercel.com/)

## Folder Structure

```
├── src/
│   ├── components/       # All UI sections (Navbar, Hero, Services, Gallery, etc.)
│   ├── data/
│   │   └── clinicTemplates.ts   # Single source of truth for all clinic content
│   ├── types.ts          # TypeScript interfaces (ClinicConfig, ServiceItem, etc.)
│   ├── App.tsx            # Composes all sections into the page
│   ├── main.tsx           # React entry point
│   └── index.css          # Tailwind imports, fonts, custom animations
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Project Architecture

The site follows a **config-driven architecture**: every component receives a single `config: ClinicConfig` prop and renders based on its contents. There is no hardcoded business data inside any component.

```
clinicTemplates.ts (ClinicConfig)
        │
        ▼
    App.tsx
        │
   ┌────┴─────────────────────────────────────┐
   ▼        ▼        ▼        ▼        ▼       ▼
Navbar    Hero   AboutDoctor Services  ...   Footer
```

This means rebranding the site for a different practice — new name, colors, doctor, services, testimonials, contact info — requires editing **only** `src/data/clinicTemplates.ts`. Components never need to change.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
git clone https://github.com/22devpatel007-coder/dental-website-react.git
cd dental-website-react
npm install
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

None are required to run the project locally — the app has no backend calls and runs entirely client-side.

## Build Commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint        # type-check with tsc (no emit)
```

## Deployment

The live demo is deployed on **Vercel**. To deploy your own copy:

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel auto-detects the Vite build — no extra configuration needed
4. Deploy

## Configuration

All clinic content lives in `src/data/clinicTemplates.ts`, typed against `src/types.ts`. To customize the site for a different practice, update the exported `clinicConfig` object:

| Section | What you can change |
|---|---|
| `colors` | Primary/accent Tailwind color classes |
| `hero` | Headline, subheadline, CTA text, hero image |
| `doctor` | Name, qualifications, bio, achievements, photo |
| `services` | Array of services with icons and descriptions |
| `whyChooseUs` | Value proposition cards |
| `testimonials` | Patient reviews, ratings, photos |
| `gallery` | Facility images with category tags |
| `contact` | Phone, email, address, hours, WhatsApp number, map embed URL |

No component code changes are required for standard rebranding.

## Responsive Design

Built mobile-first and tested across:

- Mobile (< 640px)
- Tablet (640px – 1024px)
- Laptop / Desktop (1024px+)

## Website Sections

Hero → About Doctor → Services → Why Choose Us → Testimonials → Gallery → FAQ → Appointment → Contact → Footer

## Future Improvements

- Real backend integration for appointment submissions (REST API / email dispatch)
- Admin dashboard for managing bookings and content without editing code
- Google Calendar sync for appointment scheduling
- Multi-clinic / multi-template config switching
- CMS integration for non-technical content editing
- Multi-language support

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch and open a Pull Request

Please keep components config-driven — avoid hardcoding clinic-specific data.

## License

This project is licensed under the [MIT License](./LICENSE) — free to use, modify, and distribute for personal or commercial projects.

## Contact

**Dev Patel**

Building modern websites that help businesses grow.

- Live Demo: [show-dental.vercel.app](https://show-dental.vercel.app/)
- GitHub: [@22devpatel007-coder](https://github.com/22devpatel007-coder)

---

<div align="center">

If this project helped you, consider giving it a ⭐ on GitHub.

</div>