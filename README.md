# Manish Singh — Developer Portfolio Website

A premium, modern, high-performance developer portfolio built for **Manish Singh**, a first-year Computer Science student at **Scaler School of Technology** and **BITS Pilani**, specializing in Android development, mobile engineering, competitive programming, and accessible technology.

Designed with a dark, sophisticated aesthetic, subtle reactive lighting, glassmorphism, fluid Framer Motion micro-interactions, and an interactive tactile Braille simulator for the award-winning **HaptiBraille** project.

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 3.4 (custom design tokens, dark palette `#070709`, cyan/blue/violet accents)
- **Animations & Micro-interactions**: Framer Motion 12
- **Iconography**: Lucide React
- **Tactile Sound & Feedback**: Web Audio API oscillator synthesis + native HTML5 `navigator.vibrate` hardware API
- **Celebration Effects**: Canvas Confetti

---

## 📂 Project Structure

```
My website/
├── public/
│   ├── profile.jpeg              # Official photograph of Manish Singh
│   ├── codeday_photo.jpeg        # CodeDay Bengaluru podium milestone
│   └── codeday_certificate.pdf   # Official 3rd Place Hackathon Certificate
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky blurred nav with active tracking & mobile drawer
│   │   ├── Hero.jsx              # Large typography, cycling titles, photo & floating tech badges
│   │   ├── About.jsx             # Storytelling, Bengaluru badge, 3 info cards (01, 02, 03)
│   │   ├── Skills.jsx            # Modern tech cards with honest contextual tags (no fake %)
│   │   ├── Projects.jsx          # Featured showcase of HaptiBraille with architecture specs
│   │   ├── InteractiveHapticDemo.jsx # Live 6-dot Braille matrix simulator with haptic/audio pulses
│   │   ├── Achievements.jsx      # CodeDay 3rd place podium card, confetti, certificate & modal
│   │   ├── Experience.jsx        # Hustle 2.0 (8x ROI) & NCC Cadet (16-cadet platoon leader)
│   │   ├── Education.jsx         # Vertical glowing timeline (BITS Pilani, Scaler, NCS)
│   │   ├── CompetitiveProgramming.jsx # Java focus, FastScanner template & synced profile placeholders
│   │   ├── Contact.jsx           # Validated form, mailto launcher & one-click clipboard copy
│   │   ├── Footer.jsx            # Minimal credits, back-to-top smooth scroll & live status
│   │   └── BackgroundGrid.jsx    # Dot matrix pattern with cursor-following spotlight
│   ├── data/
│   │   └── portfolioData.js      # Centralized source of truth for text and links
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Custom scrollbars, glow utilities & reduced motion rules
│   └── main.jsx                  # React application entrypoint
├── index.html                    # SEO meta tags, OpenGraph preview, Geist & Inter fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium portfolio for Manish Singh"
   git branch -M main
   git remote add origin https://github.com/man-singh29/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..." > "Project"**.
4. Import your portfolio repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your portfolio will be live on a global CDN in under 1 minute!

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in.
2. Click **"Add new site" > "Import an existing project"**.
3. Connect your GitHub repository.
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

---

## 🎯 Highlights & Adherence to Instructions

1. **Authentic Profile Photo**: Manish's photograph is loaded from `profile.jpeg` with glowing aura backdrops, subtle hover scaling, and floating tech badges (`Android Development`, `Java & Kotlin`, `Problem Solving`).
2. **Honest Skill Representation**: No arbitrary fake 95% proficiency bars; real tools with practical engineering context.
3. **Interactive HaptiBraille Showcase**: Includes a live interactive 6-dot Braille matrix simulator that converts typed letters into hardware vibration pulses (`navigator.vibrate`) on phones, plus sub-bass acoustic click feedback on desktop!
4. **Milestone Verification**: Features the CodeDay Bengaluru 3rd place award with a direct link to the official certificate (`codeday_certificate.pdf`) and team event photo modal (`codeday_photo.jpeg`).
5. **Functional Contact Workflow**: Form validates all fields and directly pre-populates email drafts using `mailto:`, accompanied by a one-click copy email button with instant visual feedback.
