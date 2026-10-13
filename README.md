# Tharangini Siddenki — Personal Developer Portfolio

A cinematic, futuristic, premium personal developer portfolio website for **Tharangini Siddenki**, a Computer Science student, UI/UX Designer, and Web Developer.

Built with a pure black background (`#050505`), vibrant red geometric accents (`#ff1018`), responsive layout architecture, live GitHub API activity integration, and a **strict zero-raster-image design** (all visuals, HUDs, and project schematics are crafted with pure CSS and inline SVG).

---

## 🚀 Live Demo & Overview

* **Theme**: Pure Black (`#050505`) with High-Voltage Red (`#ff1018`) Wireframe Accents
* **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Monospace / HUD)
* **Images**: **100% Vector & CSS** — Zero raster images, stock photos, or placeholders
* **Responsiveness**: Fully responsive across Mobile (320px+), Tablet, Laptop, and Ultra-wide Desktop

---

## 📁 Project Structure

```
portfolio website/
├── index.html                 # Semantic HTML5 architecture & SEO Open Graph metadata
├── styles/
│   ├── variables.css          # Design tokens (colors, glow shadows, spacing, typography)
│   └── main.css               # Core styling, responsive layouts, HUD schematics, animations
├── scripts/
│   ├── config.js              # Centralized user details (email, bio, social links)
│   ├── projects-data.js       # Verified projects catalog & bespoke SVG wireframes
│   ├── github.js              # Live GitHub API metrics & event stream module
│   └── main.js                # Navigation spy, mobile drawer, project filters, contact form
└── README.md                  # Documentation and deployment instructions
```

---

## 🛠️ How to Customize Your Portfolio

### 1. Change Your Email Address
Open [`scripts/config.js`](file:///c:/Users/THARANGINI/OneDrive/Documents/Desktop/portfolio%20website/scripts/config.js):
```javascript
const CONFIG = {
  // Update your email here:
  email: "your.email@example.com",
  ...
};
```
This automatically updates the mailto buttons, copy-to-clipboard button, and contact channel displays across the entire website.

### 2. Update Social Links
In [`scripts/config.js`](file:///c:/Users/THARANGINI/OneDrive/Documents/Desktop/portfolio%20website/scripts/config.js), edit the `socials` object:
```javascript
socials: {
  github: "https://github.com/siddenkitharangini",
  linkedin: "https://www.linkedin.com/in/tharangini-siddenki",
  username: "siddenkitharangini"
}
```

### 3. Add or Modify Projects
Open [`scripts/projects-data.js`](file:///c:/Users/THARANGINI/OneDrive/Documents/Desktop/portfolio%20website/scripts/projects-data.js). Each project is an object with verified GitHub repo and live demo URLs:
```javascript
{
  id: "project-slug",
  title: "Project Title",
  category: "frontend", // "frontend" | "fullstack" | "database"
  categoryLabel: "Category Label",
  description: "Accurate, concise project summary.",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/siddenkitharangini/repo-name",
  liveUrl: "https://your-live-deployment.vercel.app", // null if not deployed
  wireframeType: "ecommerce" // "ecommerce" | "restaurant" | "backend" | "database" | "stopwatch" | "todo" | "game" | "landing"
}
```

---

## 🌐 Running Locally

You can preview the website locally using any static file server:

### Option 1: Using Node.js (Built-in)
```bash
node -e "const http = require('http'); const fs = require('fs'); const path = require('path'); const port = 3000; const server = http.createServer((req, res) => { let filePath = '.' + (req.url === '/' ? '/index.html' : req.url.split('?')[0]); const ext = path.extname(filePath); const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml' }; const contentType = types[ext] || 'text/plain'; fs.readFile(filePath, (err, content) => { if (err) { res.writeHead(404); res.end('Not found'); } else { res.writeHead(200, { 'Content-Type': contentType }); res.end(content); } }); }); server.listen(port, () => console.log('Server running at http://localhost:' + port));"
```
Then open `http://localhost:3000` in your web browser.

### Option 2: Using VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🚢 Deployment to Vercel or GitHub Pages

### Deploy to Vercel (Instant 1-Click)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Tharangini Siddenki portfolio"
   git branch -M main
   git remote add origin https://github.com/siddenkitharangini/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **Deploy**. (Zero configuration required!).

### Deploy to GitHub Pages
1. Go to your repository settings on GitHub.
2. Under **Pages**, select branch `main` and root directory `/`.
3. Click **Save**.
