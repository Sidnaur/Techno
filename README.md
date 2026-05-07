# 🌿 AgriVision — Frontend

AI-powered plant disease detection web app built for Filipino farmers. Upload or capture a photo of a plant leaf and get an instant diagnosis with simple, actionable treatment tips.

**Live App:** [https://agrivision-beta.vercel.app](https://agrivision-beta.vercel.app)

---

## 📋 Overview

AgriVision is a Technopreneurship course project prototype. It simulates a startup product that helps local farmers identify plant diseases early using AI — without needing scientific knowledge or expensive equipment.

---

## ⚙️ Tech Stack

| Tool | Purpose |
|---|---|
| React + Vite | Frontend framework |
| React Router | Page navigation |
| Axios | API requests to backend |
| Context API | Language switching |

---

## 📁 Project Structure

```
Techno/
├── public/
│   └── logo.png
├── src/
│   ├── api.js                  ← Axios instance (points to backend)
│   ├── App.jsx                 ← Routes setup
│   ├── main.jsx                ← Entry point
│   ├── assets/                 ← Images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Footer.jsx
│   │   ├── QuickTips.jsx
│   │   ├── SupportedPlants.jsx
│   │   └── LanguageSelector.jsx
│   ├── context/
│   │   └── LanguageContext.jsx ← Multi-language support
│   └── pages/
│       ├── DetectDisease.jsx   ← Main feature page
│       ├── PlantDiseases.jsx   ← Disease reference library
│       ├── Blog.jsx            ← Research articles
│       └── About.jsx           ← About the project
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js v18 or higher
- The backend must be running (see backend README)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/Techno.git
cd Techno
```

**2. Install dependencies**
```bash
npm install
```

**3. Point to your backend**

Open `src/api.js` and set the `baseURL`:

```js
// For local development
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// For production (already set if using deployed backend)
const api = axios.create({
  baseURL: 'https://techno-backend-1b0v.onrender.com',
});
```

**4. Start the development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment

This frontend is deployed on **Vercel**.

To redeploy, just push to the `main` branch — Vercel auto-deploys on every push.

```bash
git add .
git commit -m "your message"
git push
```

---

## ✨ Features

- 📸 **Camera capture** — take a photo directly from your phone
- 📁 **Image upload** — drag and drop or browse files
- 🤖 **AI detection** — powered by Groq (Llama 4 Scout vision model)
- 💊 **Farmer-friendly results** — simple tips, local product names, store phrases
- 🌍 **Multi-language support** — language switching via Context API
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 📚 **Disease library** — browse common plant diseases by category
- 📰 **Blog** — research-backed farming articles

---

## 🔗 Backend

The frontend connects to the AgriVision backend for disease detection.

- **Local:** `http://localhost:3000`
- **Deployed:** `https://techno-backend-1b0v.onrender.com`

See the [backend repository](https://github.com/YOUR_USERNAME/techno-backend) for setup instructions.

---

## ⚠️ Notes

- The backend on Render's free tier **sleeps after 15 minutes of inactivity**. The first request after sleep may take 30–50 seconds. This is normal — just wait a moment before the demo.
- Camera features require **HTTPS** on mobile browsers. The Vercel deployment handles this automatically.