/**
 * VERIFIED PROJECTS DATA - THARANGINI SIDDENKI
 * All project data strictly verified from GitHub repositories & live URLs.
 * Strict No-Image Rule: Visual headers are constructed with bespoke SVG wireframe schematics.
 */

const PROJECTS_DATA = [
  {
    id: "veloura",
    title: "Veloura",
    category: "frontend",
    categoryLabel: "E-Commerce / Frontend",
    description: "A luxury-inspired beauty and fashion e-commerce platform focused on polished UI/UX, product catalog browsing, responsive shopping interfaces, and refined dark visual aesthetics.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
    githubUrl: "https://github.com/siddenkitharangini/veloura",
    liveUrl: "https://veloura-bay-three.vercel.app/",
    wireframeType: "ecommerce",
    featured: true
  },
  {
    id: "foodies-hub",
    title: "Foodie's Hub",
    category: "frontend",
    categoryLabel: "Restaurant Web App",
    description: "A modern culinary showcase platform built to deliver an engaging dining experience with responsive layouts, interactive menus, and an elegant digital interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/siddenkitharangini/foodies-hub",
    liveUrl: "https://foodies-hub-one.vercel.app/",
    wireframeType: "restaurant",
    featured: true
  },
  {
    id: "team-management",
    title: "Cricket Squad & Analytics Management",
    category: "fullstack",
    categoryLabel: "Full Stack / Spring Boot",
    description: "A production-ready Spring Boot web application featuring complete team and player CRUD operations, performance analytics dashboard, custom JPQL queries, global exception handling, and 28 JUnit/Mockito unit tests.",
    technologies: ["Spring Boot 3.2", "Java 17", "Spring Data JPA", "Hibernate", "H2 Database", "Bootstrap 5", "JUnit 5"],
    githubUrl: "https://github.com/siddenkitharangini/Team-Management",
    liveUrl: null, // Verified: No live URL deployed, enterprise/local backend app
    wireframeType: "backend",
    featured: true
  },
  {
    id: "university-examination-system",
    title: "University Examination System Database",
    category: "database",
    categoryLabel: "Database Management",
    description: "A relational database architecture modeling university departments, students, faculty, courses, enrollments, examinations, and multi-attempt exam results with 8 relational tables and junction integrity.",
    technologies: ["SQL", "Relational Schema Design", "MySQL / RDBMS", "Referential Integrity", "Data Modeling"],
    githubUrl: "https://github.com/siddenkitharangini/University-Examination-System-Database-Project",
    liveUrl: null, // Relational SQL architecture & schema scripts
    wireframeType: "database",
    featured: true
  },
  {
    id: "stopwatch-web-app",
    title: "Precision Stopwatch Web Application",
    category: "frontend",
    categoryLabel: "Frontend Web App",
    description: "A modern, high-precision stopwatch web application engineered with lap recording, timing split tracking, responsive control layout, and dedicated keyboard shortcut support.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Web APIs"],
    githubUrl: "https://github.com/siddenkitharangini/stopwatch-web-app",
    liveUrl: "https://pixel-perfect-canvas-4475.lovable.app",
    wireframeType: "stopwatch",
    featured: false
  },
  {
    id: "task-04-todo-app",
    title: "TaskFlow To-Do Web Application",
    category: "frontend",
    categoryLabel: "Frontend Web App",
    description: "A clean, responsive task management application built with vanilla JavaScript, featuring dynamic state toggling, active filtering, persistent workflow, and clean mobile-first layout.",
    technologies: ["JavaScript (ES6+)", "CSS3", "HTML5", "DOM Manipulation"],
    githubUrl: "https://github.com/siddenkitharangini/task-04-todo-app",
    liveUrl: "https://task-04-todo-app.vercel.app",
    wireframeType: "todo",
    featured: false
  },
  {
    id: "tic-tac-toe-game",
    title: "Futuristic Tic-Tac-Toe Game",
    category: "frontend",
    categoryLabel: "Interactive Web App",
    description: "A responsive Tic-Tac-Toe web application featuring both local two-player and automated computer opponent modes, live score calculation, win detection algorithms, and an interactive futuristic UI.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Game Logic"],
    githubUrl: "https://github.com/siddenkitharangini/tic-tac-toe-game",
    liveUrl: "https://tic-tac-toe-game-five-cyan.vercel.app",
    wireframeType: "game",
    featured: false
  },
  {
    id: "responsive-landing-page",
    title: "Responsive Developer Landing Page",
    category: "frontend",
    categoryLabel: "Frontend Development",
    description: "A responsive landing page showcasing frontend fundamentals, layout design, mobile-friendly interfaces, and clean responsive CSS architectures.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/siddenkitharangini/responsive-landing-page",
    liveUrl: "https://responsive-landing-page-seven-pearl.vercel.app/",
    wireframeType: "landing",
    featured: false
  }
];

// SVG Wireframe Generators for Pure CSS/SVG Visual Headers (Strict No-Image Rule)
const WIREFRAME_SCHEMATICS = {
  ecommerce: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="wf-red-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff1018" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ff1018" stop-opacity="0.1"/>
        </linearGradient>
      </defs>
      <!-- Background wireframe grid -->
      <path d="M 0,30 L 400,30 M 0,60 L 400,60 M 0,90 L 400,90 M 0,120 L 400,120 M 0,150 L 400,150" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.15" stroke-dasharray="3 3"/>
      <path d="M 40,0 L 40,180 M 120,0 L 120,180 M 200,0 L 200,180 M 280,0 L 280,180 M 360,0 L 360,180" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.15" stroke-dasharray="3 3"/>
      
      <!-- Store Navbar Wireframe -->
      <rect x="25" y="20" width="350" height="24" rx="3" fill="#0d0d11" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.4"/>
      <circle cx="42" cy="32" r="4" fill="#ff1018" fill-opacity="0.7"/>
      <line x1="56" y1="32" x2="100" y2="32" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="280" y1="32" x2="310" y2="32" stroke="#ffffff" stroke-width="1" stroke-opacity="0.3"/>
      <line x1="325" y1="32" x2="355" y2="32" stroke="#ffffff" stroke-width="1" stroke-opacity="0.3"/>

      <!-- Hero Banner Wireframe -->
      <rect x="25" y="52" width="220" height="110" rx="4" fill="#121217" stroke="#ff1018" stroke-width="1" stroke-opacity="0.35"/>
      <path d="M 40,80 L 120,80 M 40,94 L 180,94 M 40,104 L 150,104" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.5"/>
      <rect x="40" y="122" width="65" height="18" rx="2" fill="none" stroke="#ff1018" stroke-width="1"/>
      <line x1="50" y1="131" x2="95" y2="131" stroke="#ff1018" stroke-width="1"/>
      
      <!-- Product Showcase Cards Wireframe -->
      <g transform="translate(255, 52)">
        <rect x="0" y="0" width="120" height="50" rx="3" fill="#0e0e13" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.3"/>
        <rect x="8" y="8" width="34" height="34" rx="2" fill="none" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.5"/>
        <line x1="50" y1="18" x2="105" y2="18" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.5"/>
        <line x1="50" y1="28" x2="90" y2="28" stroke="#ff1018" stroke-width="1.2" stroke-opacity="0.7"/>
        <circle cx="106" cy="36" r="3" fill="#ff1018" fill-opacity="0.5"/>
      </g>
      <g transform="translate(255, 112)">
        <rect x="0" y="0" width="120" height="50" rx="3" fill="#0e0e13" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.3"/>
        <rect x="8" y="8" width="34" height="34" rx="2" fill="none" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.5"/>
        <line x1="50" y1="18" x2="105" y2="18" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.5"/>
        <line x1="50" y1="28" x2="85" y2="28" stroke="#ff1018" stroke-width="1.2" stroke-opacity="0.7"/>
        <circle cx="106" cy="36" r="3" fill="#ff1018" fill-opacity="0.5"/>
      </g>
      <!-- Geometric Accent Target -->
      <circle cx="360" cy="25" r="8" fill="none" stroke="#ff1018" stroke-width="0.6" stroke-opacity="0.4"/>
      <line x1="360" y1="15" x2="360" y2="35" stroke="#ff1018" stroke-width="0.6" stroke-opacity="0.4"/>
      <line x1="350" y1="25" x2="370" y2="25" stroke="#ff1018" stroke-width="0.6" stroke-opacity="0.4"/>
    </svg>
  `,
  restaurant: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Grid -->
      <line x1="0" y1="90" x2="400" y2="90" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.15" stroke-dasharray="2 4"/>
      <!-- Radial wireframe plate & menu schematics -->
      <circle cx="90" cy="90" r="55" fill="none" stroke="#ff1018" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="4 2"/>
      <circle cx="90" cy="90" r="38" fill="none" stroke="#ff1018" stroke-width="0.7" stroke-opacity="0.6"/>
      <circle cx="90" cy="90" r="18" fill="#141419" stroke="#ff1018" stroke-width="1" stroke-opacity="0.8"/>
      <polygon points="90,78 98,96 82,96" fill="none" stroke="#ff1018" stroke-width="0.8"/>
      
      <!-- Crosshairs -->
      <line x1="90" y1="25" x2="90" y2="155" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.3"/>
      <line x1="25" y1="90" x2="155" y2="90" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.3"/>

      <!-- Menu Grid Cards -->
      <g transform="translate(175, 30)">
        <rect x="0" y="0" width="195" height="35" rx="3" fill="#0f0f14" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.35"/>
        <circle cx="20" cy="17" r="8" fill="none" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <line x1="38" y1="13" x2="120" y2="13" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.6"/>
        <line x1="38" y1="22" x2="95" y2="22" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.5"/>
        <line x1="150" y1="17" x2="180" y2="17" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.8"/>
      </g>
      <g transform="translate(175, 75)">
        <rect x="0" y="0" width="195" height="35" rx="3" fill="#0f0f14" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.35"/>
        <circle cx="20" cy="17" r="8" fill="none" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <line x1="38" y1="13" x2="135" y2="13" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.6"/>
        <line x1="38" y1="22" x2="105" y2="22" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.5"/>
        <line x1="150" y1="17" x2="180" y2="17" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.8"/>
      </g>
      <g transform="translate(175, 120)">
        <rect x="0" y="0" width="195" height="35" rx="3" fill="#0f0f14" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.35"/>
        <circle cx="20" cy="17" r="8" fill="none" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <line x1="38" y1="13" x2="110" y2="13" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.6"/>
        <line x1="38" y1="22" x2="80" y2="22" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.5"/>
        <line x1="150" y1="17" x2="180" y2="17" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.8"/>
      </g>
    </svg>
  `,
  backend: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Spring Boot Architecture & Analytics Wireframe -->
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="95" height="55" rx="3" fill="#0f0f15" stroke="#ff1018" stroke-width="1" stroke-opacity="0.5"/>
        <text x="47" y="24" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">CONTROLLER</text>
        <line x1="15" y1="36" x2="80" y2="36" stroke="#ff1018" stroke-width="1" stroke-opacity="0.4"/>
        <text x="47" y="47" fill="#ff1018" font-size="8" font-family="monospace" text-anchor="middle">REST / MVC</text>
      </g>
      <!-- Connector 1 -->
      <path d="M 125,52 L 155,52" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.8" stroke-dasharray="3 2"/>
      
      <g transform="translate(155, 25)">
        <rect x="0" y="0" width="95" height="55" rx="3" fill="#0f0f15" stroke="#ff1018" stroke-width="1" stroke-opacity="0.5"/>
        <text x="47" y="24" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">SERVICE</text>
        <line x1="15" y1="36" x2="80" y2="36" stroke="#ff1018" stroke-width="1" stroke-opacity="0.4"/>
        <text x="47" y="47" fill="#ff1018" font-size="8" font-family="monospace" text-anchor="middle">BUSINESS JPA</text>
      </g>
      <!-- Connector 2 -->
      <path d="M 250,52 L 280,52" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.8" stroke-dasharray="3 2"/>

      <g transform="translate(280, 25)">
        <rect x="0" y="0" width="90" height="55" rx="3" fill="#0f0f15" stroke="#ff1018" stroke-width="1" stroke-opacity="0.5"/>
        <text x="45" y="24" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">H2 / RDBMS</text>
        <line x1="15" y1="36" x2="75" y2="36" stroke="#ff1018" stroke-width="1" stroke-opacity="0.4"/>
        <text x="45" y="47" fill="#ff1018" font-size="8" font-family="monospace" text-anchor="middle">PERSISTENCE</text>
      </g>

      <!-- Analytics Dashboard Bars Wireframe -->
      <g transform="translate(30, 95)">
        <rect x="0" y="0" width="340" height="65" rx="3" fill="#0b0b0f" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.3"/>
        <line x1="20" y1="52" x2="320" y2="52" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.2"/>
        
        <!-- Bars -->
        <rect x="35" y="24" width="18" height="28" fill="#ff1018" fill-opacity="0.8"/>
        <rect x="75" y="16" width="18" height="36" fill="#ff1018" fill-opacity="0.5"/>
        <rect x="115" y="30" width="18" height="22" fill="#ff1018" fill-opacity="0.9"/>
        <rect x="155" y="20" width="18" height="32" fill="#ff1018" fill-opacity="0.6"/>
        <rect x="195" y="12" width="18" height="40" fill="#ff1018" fill-opacity="1"/>
        <rect x="235" y="26" width="18" height="26" fill="#ff1018" fill-opacity="0.7"/>
        <rect x="275" y="18" width="18" height="34" fill="#ff1018" fill-opacity="0.85"/>
      </g>
    </svg>
  `,
  database: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Relational Schema ER Wireframe -->
      <!-- Department Table -->
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="100" height="60" rx="2" fill="#0f0f14" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <rect x="0" y="0" width="100" height="18" fill="#ff1018" fill-opacity="0.2"/>
        <text x="50" y="13" fill="#ffffff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">DEPARTMENT</text>
        <text x="8" y="32" fill="#ff1018" font-size="7" font-family="monospace">PK Dept_ID</text>
        <text x="8" y="44" fill="#888899" font-size="7" font-family="monospace">Dept_Name</text>
        <text x="8" y="54" fill="#888899" font-size="7" font-family="monospace">HOD_Emp_ID</text>
      </g>

      <!-- Student Table -->
      <g transform="translate(150, 20)">
        <rect x="0" y="0" width="100" height="60" rx="2" fill="#0f0f14" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <rect x="0" y="0" width="100" height="18" fill="#ff1018" fill-opacity="0.2"/>
        <text x="50" y="13" fill="#ffffff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">STUDENT</text>
        <text x="8" y="32" fill="#ff1018" font-size="7" font-family="monospace">PK Roll_No</text>
        <text x="8" y="44" fill="#888899" font-size="7" font-family="monospace">Name</text>
        <text x="8" y="54" fill="#ff1018" font-size="7" font-family="monospace">FK Dept_ID</text>
      </g>

      <!-- Exam Attempt Table -->
      <g transform="translate(275, 20)">
        <rect x="0" y="0" width="100" height="60" rx="2" fill="#0f0f14" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <rect x="0" y="0" width="100" height="18" fill="#ff1018" fill-opacity="0.2"/>
        <text x="50" y="13" fill="#ffffff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">EXAM_ATTEMPT</text>
        <text x="8" y="32" fill="#ff1018" font-size="7" font-family="monospace">FK Exam_ID</text>
        <text x="8" y="44" fill="#ff1018" font-size="7" font-family="monospace">FK Roll_No</text>
        <text x="8" y="54" fill="#888899" font-size="7" font-family="monospace">Marks, Attempt#</text>
      </g>

      <!-- Relationships Connectors -->
      <path d="M 125,40 L 150,40" stroke="#ff1018" stroke-width="1.2" stroke-dasharray="2 2"/>
      <circle cx="125" cy="40" r="2" fill="#ff1018"/>
      <circle cx="150" cy="40" r="2" fill="#ff1018"/>

      <path d="M 250,40 L 275,40" stroke="#ff1018" stroke-width="1.2" stroke-dasharray="2 2"/>
      <circle cx="250" cy="40" r="2" fill="#ff1018"/>
      <circle cx="275" cy="40" r="2" fill="#ff1018"/>

      <!-- Lower Tables -->
      <g transform="translate(85, 100)">
        <rect x="0" y="0" width="105" height="58" rx="2" fill="#0f0f14" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <rect x="0" y="0" width="105" height="18" fill="#ff1018" fill-opacity="0.2"/>
        <text x="52" y="13" fill="#ffffff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">COURSE</text>
        <text x="8" y="32" fill="#ff1018" font-size="7" font-family="monospace">PK Course_Code</text>
        <text x="8" y="44" fill="#ff1018" font-size="7" font-family="monospace">FK Dept_ID</text>
        <text x="8" y="54" fill="#888899" font-size="7" font-family="monospace">Credits</text>
      </g>

      <g transform="translate(210, 100)">
        <rect x="0" y="0" width="105" height="58" rx="2" fill="#0f0f14" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <rect x="0" y="0" width="105" height="18" fill="#ff1018" fill-opacity="0.2"/>
        <text x="52" y="13" fill="#ffffff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">ENROLLMENT</text>
        <text x="8" y="32" fill="#ff1018" font-size="7" font-family="monospace">PK Roll_No</text>
        <text x="8" y="44" fill="#ff1018" font-size="7" font-family="monospace">PK Course_Code</text>
        <text x="8" y="54" fill="#888899" font-size="7" font-family="monospace">Attendance %</text>
      </g>

      <!-- Junction Connector -->
      <path d="M 200,80 L 200,100" stroke="#ff1018" stroke-width="1.2" stroke-dasharray="2 2"/>
    </svg>
  `,
  stopwatch: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- High Precision Stopwatch Dial -->
      <circle cx="110" cy="90" r="60" fill="#0c0c10" stroke="#ff1018" stroke-width="1" stroke-opacity="0.4"/>
      <circle cx="110" cy="90" r="50" fill="none" stroke="#ff1018" stroke-width="0.8" stroke-dasharray="2 4" stroke-opacity="0.7"/>
      <!-- Digital readout -->
      <rect x="65" y="75" width="90" height="30" rx="3" fill="#13131a" stroke="#ff1018" stroke-width="0.8"/>
      <text x="110" y="95" fill="#ffffff" font-size="13" font-family="monospace" text-anchor="middle" font-weight="bold">00:42.89</text>
      <!-- Buttons -->
      <rect x="100" y="20" width="20" height="10" rx="2" fill="#ff1018" fill-opacity="0.7"/>
      <rect x="145" y="40" width="10" height="15" rx="2" fill="#ff1018" fill-opacity="0.4" transform="rotate(35 150 45)"/>

      <!-- Lap splits wireframe table -->
      <g transform="translate(200, 25)">
        <rect x="0" y="0" width="170" height="130" rx="3" fill="#0e0e13" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.3"/>
        <rect x="0" y="0" width="170" height="24" fill="#ff1018" fill-opacity="0.15"/>
        <text x="20" y="16" fill="#ffffff" font-size="8" font-family="monospace">LAP</text>
        <text x="80" y="16" fill="#ffffff" font-size="8" font-family="monospace">SPLIT</text>
        <text x="135" y="16" fill="#ffffff" font-size="8" font-family="monospace">TOTAL</text>
        
        <text x="20" y="46" fill="#ff1018" font-size="8" font-family="monospace">#03</text>
        <text x="75" y="46" fill="#ffffff" font-size="8" font-family="monospace">00:12.14</text>
        <text x="130" y="46" fill="#a0a0b0" font-size="8" font-family="monospace">00:42.89</text>

        <text x="20" y="74" fill="#ff1018" font-size="8" font-family="monospace">#02</text>
        <text x="75" y="74" fill="#ffffff" font-size="8" font-family="monospace">00:14.32</text>
        <text x="130" y="74" fill="#a0a0b0" font-size="8" font-family="monospace">00:30.75</text>

        <text x="20" y="102" fill="#ff1018" font-size="8" font-family="monospace">#01</text>
        <text x="75" y="102" fill="#ffffff" font-size="8" font-family="monospace">00:16.43</text>
        <text x="130" y="102" fill="#a0a0b0" font-size="8" font-family="monospace">00:16.43</text>
      </g>
    </svg>
  `,
  todo: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="30" y="20" width="340" height="140" rx="4" fill="#0d0d12" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.3"/>
      <!-- Input bar -->
      <rect x="45" y="32" width="230" height="24" rx="3" fill="#14141a" stroke="#ff1018" stroke-width="0.6" stroke-opacity="0.5"/>
      <line x1="55" y1="44" x2="160" y2="44" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.4"/>
      <rect x="285" y="32" width="70" height="24" rx="3" fill="#ff1018" fill-opacity="0.8"/>
      <text x="320" y="48" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">+ ADD</text>

      <!-- Task Items -->
      <g transform="translate(45, 68)">
        <rect x="0" y="0" width="310" height="24" rx="2" fill="#111116" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.3"/>
        <rect x="8" y="6" width="12" height="12" rx="2" fill="#ff1018" fill-opacity="0.9"/>
        <line x1="30" y1="12" x2="210" y2="12" stroke="#6b6b7a" stroke-width="1.2"/>
        <circle cx="295" cy="12" r="3" fill="#ff1018" fill-opacity="0.5"/>
      </g>
      <g transform="translate(45, 98)">
        <rect x="0" y="0" width="310" height="24" rx="2" fill="#111116" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.3"/>
        <rect x="8" y="6" width="12" height="12" rx="2" fill="none" stroke="#ff1018" stroke-width="1"/>
        <line x1="30" y1="12" x2="240" y2="12" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.7"/>
        <circle cx="295" cy="12" r="3" fill="#ff1018" fill-opacity="0.5"/>
      </g>
      <g transform="translate(45, 128)">
        <rect x="0" y="0" width="310" height="24" rx="2" fill="#111116" stroke="#ff1018" stroke-width="0.5" stroke-opacity="0.3"/>
        <rect x="8" y="6" width="12" height="12" rx="2" fill="none" stroke="#ff1018" stroke-width="1"/>
        <line x1="30" y1="12" x2="190" y2="12" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.7"/>
        <circle cx="295" cy="12" r="3" fill="#ff1018" fill-opacity="0.5"/>
      </g>
    </svg>
  `,
  game: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- 3x3 Grid Matrix -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="140" height="140" rx="3" fill="#0d0d12" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.4"/>
        <!-- Grid lines -->
        <line x1="47" y1="10" x2="47" y2="130" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.6"/>
        <line x1="94" y1="10" x2="94" y2="130" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.6"/>
        <line x1="10" y1="47" x2="130" y2="47" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.6"/>
        <line x1="10" y1="94" x2="130" y2="94" stroke="#ff1018" stroke-width="1.5" stroke-opacity="0.6"/>
        
        <!-- X mark -->
        <line x1="18" y1="18" x2="38" y2="38" stroke="#ff1018" stroke-width="2.5"/>
        <line x1="38" y1="18" x2="18" y2="38" stroke="#ff1018" stroke-width="2.5"/>

        <!-- O mark -->
        <circle cx="70" cy="70" r="11" fill="none" stroke="#ffffff" stroke-width="2.2"/>

        <!-- X mark -->
        <line x1="60" y1="18" x2="80" y2="38" stroke="#ff1018" stroke-width="2.5"/>
        <line x1="80" y1="18" x2="60" y2="38" stroke="#ff1018" stroke-width="2.5"/>

        <!-- Winning strike line -->
        <line x1="15" y1="28" x2="125" y2="28" stroke="#ff1018" stroke-width="2" stroke-opacity="0.9" stroke-dasharray="4 2"/>
      </g>

      <!-- Scoreboard & AI HUD -->
      <g transform="translate(210, 25)">
        <rect x="0" y="0" width="155" height="45" rx="3" fill="#121218" stroke="#ff1018" stroke-width="0.8" stroke-opacity="0.5"/>
        <text x="40" y="20" fill="#ff1018" font-size="8" font-family="monospace">PLAYER (X)</text>
        <text x="40" y="36" fill="#ffffff" font-size="12" font-family="monospace" font-weight="bold">05</text>
        <line x1="77" y1="8" x2="77" y2="37" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.2"/>
        <text x="115" y="20" fill="#888899" font-size="8" font-family="monospace">AI (O)</text>
        <text x="115" y="36" fill="#ffffff" font-size="12" font-family="monospace" font-weight="bold">02</text>
      </g>
      <g transform="translate(210, 80)">
        <rect x="0" y="0" width="155" height="70" rx="3" fill="#0d0d12" stroke="#ff1018" stroke-width="0.6" stroke-opacity="0.3"/>
        <text x="15" y="24" fill="#ffffff" font-size="8" font-family="monospace">MODE: AI MINIMAX</text>
        <text x="15" y="42" fill="#ff1018" font-size="8" font-family="monospace">STATUS: TURN DETECTED</text>
        <line x1="15" y1="52" x2="140" y2="52" stroke="#ff1018" stroke-width="1" stroke-opacity="0.4"/>
      </g>
    </svg>
  `,
  landing: `
    <svg viewBox="0 0 400 180" class="wireframe-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Desktop & Mobile Responsive Multi-Device Frame Wireframe -->
      <!-- Desktop Browser -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="220" height="135" rx="4" fill="#0d0d12" stroke="#ff1018" stroke-width="1" stroke-opacity="0.6"/>
        <rect x="0" y="0" width="220" height="18" fill="#16161f"/>
        <circle cx="12" cy="9" r="3" fill="#ff1018" fill-opacity="0.8"/>
        <circle cx="22" cy="9" r="3" fill="#ffffff" fill-opacity="0.3"/>
        <circle cx="32" cy="9" r="3" fill="#ffffff" fill-opacity="0.3"/>
        <rect x="50" y="4" width="120" height="10" rx="2" fill="#09090c"/>

        <!-- Wireframe Content -->
        <line x1="20" y1="36" x2="110" y2="36" stroke="#ffffff" stroke-width="1.8" stroke-opacity="0.6"/>
        <line x1="20" y1="48" x2="160" y2="48" stroke="#ff1018" stroke-width="1.2" stroke-opacity="0.5"/>
        <line x1="20" y1="58" x2="140" y2="58" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.3"/>
        <rect x="20" y="72" width="50" height="14" rx="2" fill="#ff1018" fill-opacity="0.8"/>

        <!-- Grid Cards inside -->
        <rect x="20" y="96" width="55" height="28" rx="2" fill="#14141c" stroke="#ff1018" stroke-width="0.5"/>
        <rect x="82" y="96" width="55" height="28" rx="2" fill="#14141c" stroke="#ff1018" stroke-width="0.5"/>
        <rect x="144" y="96" width="55" height="28" rx="2" fill="#14141c" stroke="#ff1018" stroke-width="0.5"/>
      </g>

      <!-- Mobile Device Frame -->
      <g transform="translate(280, 30)">
        <rect x="0" y="0" width="75" height="125" rx="6" fill="#0a0a0e" stroke="#ff1018" stroke-width="1.2" stroke-opacity="0.8"/>
        <!-- Speaker / Notch -->
        <rect x="27" y="5" width="20" height="3" rx="1.5" fill="#ff1018" fill-opacity="0.6"/>
        <!-- Screen Content -->
        <line x1="12" y1="22" x2="50" y2="22" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.7"/>
        <line x1="12" y1="30" x2="62" y2="30" stroke="#ff1018" stroke-width="1" stroke-opacity="0.5"/>
        <rect x="12" y="40" width="50" height="24" rx="2" fill="#14141c" stroke="#ff1018" stroke-width="0.5"/>
        <rect x="12" y="70" width="50" height="24" rx="2" fill="#14141c" stroke="#ff1018" stroke-width="0.5"/>
        <circle cx="37" cy="112" r="5" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.4"/>
      </g>
    </svg>
  `
};

// Export to window
window.PROJECTS_DATA = PROJECTS_DATA;
window.WIREFRAME_SCHEMATICS = WIREFRAME_SCHEMATICS;
