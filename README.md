# OmniClinic Practice Website

A highly-adaptable, professional, and trustworthy multi-specialty clinic website template, switchable for Dental, Physiotherapy, Dermatology, and Eye care practices.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app:
   `npm run dev`

## 🌟 Practice Switcher (MVP Presenter Toolbar)

To show how easily the website can be rebranded for different clients, this project includes a sleek, dismissible Review Toolbar at the very top of the screen. Prospective clients can toggle between these four presets in real-time to watch the entire website (copy, colors, photos, doctor profile, and contact details) transition instantly:

- 🦷 **Dental Practice:** Aura Dental Care (Primary Blue / Emerald Accent)
- 🏃 **Physiotherapy Practice:** Kinetic Rehab & Physiotherapy (Teal / Orange Accent)
- ✨ **Dermatology Practice:** Aethel Dermatology & Skin Clinic (Rose / Violet Accent)
- 👁️ **Ophthalmology Practice:** Vanguard Ophthalmology & Laser Vision (Indigo / Cyan Accent)

## 🎨 Design & Aesthetic Decisions

- **Typography:** Integrated Inter for clinical body copy paired with Plus Jakarta Sans for display headings to convey modern, clean professionalism.
- **Visual Trust:** Replaced flashy, simulated elements with real clinical trust points — including star ratings, verified patient status tokens, medical accreditations, board certifications, and comprehensive healthcare disclaimers.
- **Spacing & Structure:** Avoided generic templates. Each section uses balanced whitespace, clean borders (`#E2E8F0`), and high-contrast content layouts prioritizing legibility and accessibility.

## 🧱 Modular Technical Architecture

The codebase is highly organized, making it simple for another developer to maintain:

- **`types.ts`:** Declares rigid TypeScript interfaces to govern doctor bios, services, value props, contact specs, and color schemes.
- **`clinicTemplates.ts`:** Contains the complete, realistic data structures for all four practice domains.
- **`Navbar`:** Sticky navigation with responsive logo matching, smooth offsets for scroll targeting, and a robust mobile drawer.
- **`Hero` & `AboutDoctor`:** Spotlights credentialed clinical personnel alongside detailed photos, credentials, and practice philosophy cards.
- **`Services` & `WhyChooseUs`:** Highlights clinical expertise with dynamic SVG icons and lists concrete safety, sterility, and equipment standards.
- **`Testimonials`:** Shows high-fidelity patient stories with verified badges, dates, and aggregate rating stats.
- **`Gallery`:** Features custom image filters (Clinic, Rooms, Equipment, Staff) and an interactive full-screen lightbox modal zoom when clicking any image.
- **`AppointmentForm`:** A secure, interactive patient intake questionnaire. Upon submission, it displays a mock booking confirmation ticket with a dynamic reference code and caches the reservation locally. The code contains detailed instructions for integrating with a REST API, EmailJS, or direct WhatsApp API dispatchers.
- **`Contact`:** Features direct-dial links, a custom embedded Google Map frame matching the active clinic's real coordinates, and a fixed floating WhatsApp Help Desk widget.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Lucide React (icons)
- Motion (animations)
- Express (optional server)