# 🚚 Urban MoveHomes

**Find Homes. Move Smart. Live Better.**

A modern, responsive website for a professional moving company based in Kenya.

---

## ✨ Features

- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 React Router navigation
- 🏠 Home page with hero section and CTA buttons
- 📄 About page with story, mission, and values
- 📦 Services page with detailed descriptions
- 📞 Contact and Quote pages with forms
- 🎨 Modular CSS (component-specific styles)
- ✅ WhatsApp integration for instant contact

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite |
| Routing | React Router DOM |
| Styling | CSS (modular) |
| Hosting | Netlify / Vercel |
| Version Control | Git + GitHub |

---

## 📁 Project Structure
urban-movehomes/
├── src/
│ ├── assets/
│ │ └── logo.png
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Services.jsx
│ │ ├── Contact.jsx
│ │ └── Quote.jsx
│ ├── css/
│ │ ├── style.css
│ │ ├── logo.css
│ │ ├── home.css
│ │ ├── about.css
│ │ └── services.css
│ ├── App.jsx
│ └── main.jsx
├── public/
│ └── index.html
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

text

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/urban-movehomes.git
cd urban-movehomes
2. Install Dependencies
bash
npm install
3. Start Development Server
bash
npm run dev
The app will run at http://localhost:5173/

4. Build for Production
bash
npm run build
🌐 Deployment
Deploy to Netlify (Recommended)
Push your code to GitHub

Go to Netlify → "Add new site" → "Import from Git"

Select your repository

Build command: npm run build

Publish directory: dist

Click "Deploy"

Deploy to Vercel
Go to Vercel → "Add New" → "Project"

Select your repository

Click "Deploy"

📞 Forms
The Contact and Quote forms currently show a success message but do not send emails or save data yet.

Backend options:

Option	Description
Formspree	Free, no-backend form handling
Flask API	Build a Python/Flask backend
Firebase	Store submissions in Firestore
🎨 Customization
Change the Logo
Add your logo to src/assets/

In Navbar.jsx, uncomment the image logo code:

jsx
import logo from '../assets/logo.png';
<img src={logo} alt="Urban MoveHomes" className="logo-image" />
Change Colors
Update colors in src/css/style.css:

css
:root {
    --primary: #1a3c6e;
    --accent: #f4a261;
}
📱 Mobile Responsive
The website works on:

Desktop (1200px+)

Tablet (768px – 1199px)

Mobile (320px – 767px)

📄 License
All rights reserved to Urban MoveHomes.

👨‍💻 Developer
Moses Cheruiyot

GitHub: ArapCheruiyot

Portfolio: vision-to-versions.onrender.com

🙏 Acknowledgments
Built with ❤️ for Urban MoveHomes — making moving simple, safe, and stress-free.

Happy Moving! 🚚

text

---

## How to Add It

| Step | Action |
|------|--------|
| 1 | In VS Code, create a new file in your project root: `README.md` |
| 2 | Copy and paste the entire block above |
| 3 | Save the file |
| 4 | Commit and push: |

```bash
git add README.md
git commit -m "Add README file"
git push
