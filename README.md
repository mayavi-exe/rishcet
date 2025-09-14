<!-- ============================
     RCET README with Animated Banner
     Copy-paste the whole file below into README.md
     ============================ -->

<!-- Animated SVG Banner (copy-pasteable) -->
<div align="center">
  <!-- Inline SVG: gradient + subtle animation -->
  <svg width="100%" height="160" viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="RCET - Rishabh College of Engineering and Technology">
    <defs>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"  stop-color="#8A2BE2"/>
        <stop offset="50%" stop-color="#00C4CC"/>
        <stop offset="100%" stop-color="#FF7A59"/>
        <!-- animate gradient shift -->
        <animate attributeName="x1" values="0%;100%;0%" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="x2" values="100%;0%;100%" dur="6s" repeatCount="indefinite"/>
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f1724"/>
        <stop offset="100%" stop-color="#071427"/>
      </linearGradient>
    </defs>

    <!-- Background rectangle -->
    <rect width="100%" height="100%" fill="url(#bg)" rx="12" />

    <!-- Soft lines / grid for techy feel -->
    <g opacity="0.06" stroke="#ffffff" stroke-width="1">
      <path d="M0 120 H1200" />
      <path d="M0 40 H1200" />
      <path d="M0 80 H1200" />
    </g>

    <!-- Glowing text shadow -->
    <text x="50%" y="55" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="28" text-anchor="middle" fill="rgba(255,255,255,0.05)" filter="url(#glow)">
      Rishabh College of Engineering and Technology
    </text>

    <!-- Main gradient text -->
    <text x="50%" y="60" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="36" font-weight="700" text-anchor="middle" fill="url(#g1)" style="letter-spacing:1px;">
      Rishabh College of Engineering and Technology
      <!-- subtle floating animation -->
      <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 4; 0 0" dur="4s" repeatCount="indefinite"/>
    </text>

    <!-- Tagline -->
    <text x="50%" y="98" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="16" text-anchor="middle" fill="#cfeffd" opacity="0.95">
      Shaping Tomorrow's Engineers Today — Innovation • Integrity • Impact
    </text>

    <!-- Circuit-like decorative paths on both sides -->
    <g stroke="#88f0ff" stroke-opacity="0.12" stroke-width="1.2" fill="none">
      <path d="M40 30 C70 30,90 10,120 26" />
      <path d="M1160 30 C1130 30,1110 10,1080 26" />
    </g>
  </svg>
</div>

<!-- ====== Badges ====== -->
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7E017?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/AI%20Inspired-8A2BE2?style=for-the-badge&logo=openai&logoColor=white" alt="AI Inspired" />
  <img src="https://img.shields.io/badge/Responsive%20Design-00C4CC?style=for-the-badge" alt="Responsive" />
  <img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge&logo=github&logoColor=white" alt="Open Source" />
</p>

---

# RCET – Rishabh College of Engineering and Technology

Welcome to the RCET website project — a modern, responsive, and AI-inspired web presence that showcases courses, faculty, admissions and more. Built for clarity, speed, and future AI enhancements.

---

## ✨ Features

- **Homepage** with hero banner and CTA.
- **About** page detailing mission & vision.
- **Courses** – program listings and brief descriptions.
- **Faculty** – profiles & expertise highlights.
- **Admissions** – steps and contact details.
- **Contact** – phone, email, and address.
- **Responsive** layout for mobile and desktop.
- Lightweight **Vanilla JS** interactions.
- Ready for AI plug-ins: chatbots, smart search, analytics.

---

## 🗂 Project Structure

