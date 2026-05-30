VeryDarkMan (Martins Vincent Otse) — Official Website
Project Documentation & Developer Guide
Document Version: 1.0
Prepared For: Developer / Project Lead
Project Name: VDM Web Portal
Subject: Martins Vincent Otse — popularly known as VeryDarkMan (VDM)

1. Project Overview
This document is the master guide for building a multi-page informational and advocacy website dedicated to Martins Vincent Otse, popularly known as VeryDarkMan (VDM) — Nigerian social media activist, content creator, and civic leader. The site will serve as his official digital presence, covering his profile, movements, business activities, partnerships, news, and a contact portal.
1.1 Purpose & Goals

Provide a single authoritative digital hub for VDM's public identity
Present his NGO (MVOI) and civic movement (Ratel) clearly and professionally
Share news/updates, business activities, and partnership opportunities
Give supporters, journalists, and collaborators a structured way to reach out

1.2 Target Audience

Nigerian youth and civil society followers
Journalists and media professionals
Potential business and NGO partners
General public seeking background on VDM


2. Subject Profile Summary

Use this section to populate content across all pages.

FieldDetailFull NameMartins Vincent OtseKnown AsVeryDarkMan / VDMDate of BirthApril 8, 1994State of OriginAgenebode, Edo State, NigeriaEducationBusiness Administration, University of LagosCareer Start2022 (online advocacy)Self-Description"Online Police" / Fourth Arm of GovernmentNGOMartins Vincent Otse Initiative (MVOI) — mvoi4all.comCivic MovementRatel MovementSocial PlatformsInstagram, TikTok, Facebook, YouTube

3. Site Architecture
3.1 Page Structure
/
├── index.html          ← HOME
├── profile.html        ← VDM PROFILE
├── movements.html      ← MOVEMENTS (Martins Vincent Otse Initiative (MVOI) + Ratel Movement, a loosely organised online-driven civic initiative “fourth arm of government” in Nigeria)
├── business.html       ← BUSINESS
├── partners.html       ← PARTNERS
├── news.html           ← NEWS
├── gallery.html        ← Pictures
├── contact.html        ← CONTACT
│
├── css/
│   ├── global.css      ← Shared variables, resets, navbar, footer
│   ├── home.css
│   ├── profile.css
│   ├── movements.css
│   ├── business.css
│   ├── partners.css
│   ├── news.css
│   ├── gallery.css
│   └── contact.css
│
├── js/
│   ├── global.js       ← Shared: navbar toggle, scroll effects, footer
│   ├── home.js
│   ├── profile.js
│   ├── movements.js
│   ├── business.js
│   ├── partners.js
│   ├── news.js
│   ├── gallery.js
│   └── contact.js
│
└── images/
        ├── vdm1.jpg
        ├── vdm2.jpg
        ├── vdm3.jpg
        ├── vdm4.jpg
        ├── vdm5.png
        ├── VDMlogo.png
        ├── ratellogo.png
        

        
3.2 Navigation Links
Every page shares the same top navbar with these links:
HOME | VDM PROFILE | MOVEMENTS ▼ | BUSINESS | PARTNERS | NEWS | CONTACT
                        ↓
              [MVOI]  [Ratel Movement]
The MOVEMENTS link is a dropdown button with two sub-items.

4. Global Design System
4.1 Color Palette
css/* global.css — CSS Variables */
:root {
  --black:       #0A0A0A;
  --dark-gray:   #111111;
  --charcoal:    #1C1C1C;
  --red-primary: #CC2200;       /* VDM brand accent — bold Nigerian red */
  --red-hover:   #AA1800;
  --gold:        #D4A017;       /* Secondary accent — authority, prestige */
  --white:       #F5F5F5;
  --light-gray:  #B0B0B0;
  --text-body:   #CCCCCC;
  --card-bg:     #181818;
  --border:      rgba(204, 34, 0, 0.3);
}
Rationale: Dark, high-contrast theme. Red evokes urgency and passion (VDM's brand energy). Gold suggests authority and civic dignity. White text on dark ensures readability.
4.2 Typography
html<!-- Add to <head> of every page -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
css/* Typography rules */
--font-display: 'Bebas Neue', sans-serif;    /* Hero headings, page titles */
--font-body:    'Inter', sans-serif;          /* Body text, nav, labels */
--font-accent:  'Playfair Display', serif;    /* Pull quotes, taglines */
4.3 Shared HTML Shell
Every page must use this shell:
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VeryDarkMan — [PAGE TITLE]</title>
  <meta name="description" content="[Page-specific description]" />
  <link rel="stylesheet" href="css/global.css" />
  <link rel="stylesheet" href="css/[PAGE].css" />
  <link rel="icon" href="assets/icons/favicon.ico" />
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
</head>
<body>

  <!-- NAVBAR (same across all pages) -->
  <nav class="navbar" id="navbar">
    <div class="nav-brand">
      <span class="brand-vdm">VDM</span>
    </div>
    <div class="nav-toggle" id="navToggle">
      <span></span><span></span><span></span>
    </div>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="profile.html">VDM Profile</a></li>
      <li class="dropdown">
        <a href="movements.html" class="dropdown-trigger">Movements ▾</a>
        <ul class="dropdown-menu">
          <li><a href="movements.html#mvoi">MVOI</a></li>
          <li><a href="movements.html#ratel">Ratel Movement</a></li>
        </ul>
      </li>
      <li><a href="business.html">Business</a></li>
      <li><a href="partners.html">Partners</a></li>
      <li><a href="news.html">News</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <!-- PAGE CONTENT GOES HERE -->
  <main>
    <!-- ... -->
  </main>

  <!-- FOOTER (same across all pages) -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">VDM — VeryDarkMan</div>
      <p class="footer-tagline">"The Fourth Arm of Government"</p>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="profile.html">Profile</a>
        <a href="movements.html">Movements</a>
        <a href="news.html">News</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-social">
        <a href="https://instagram.com/verydarkblackman" target="_blank">Instagram</a>
        <a href="https://tiktok.com/@verydarkman" target="_blank">TikTok</a>
        <a href="https://mvoi4all.com" target="_blank">MVOI</a>
      </div>
      <p class="footer-copy">&copy; 2025 VeryDarkMan. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/global.js"></script>
  <script src="js/[PAGE].js"></script>
</body>
</html>

5. Page-by-Page Specifications

PAGE 1 — HOME (index.html)
Purpose: First impression. Establish VDM's identity, mission, and energy.
Sections:
5.1.1 Hero Section

Full-viewport dark background with VDM hero image
Large display headline: "THE FOURTH ARM OF GOVERNMENT"
Subline: "Martins Vincent Otse — Social Activist. Digital Vigilante. Voice of the Streets."
Two CTA buttons: [Learn About VDM] → profile.html | [Support MVOI] → movements.html#mvoi
Optional: subtle red animated underline or parallax scroll effect

5.1.2 Who Is VDM? — Brief Intro Strip

3-column stat cards:

2022 — Year of Advocacy
₦377M+ — MVOI Funds Raised
4th Arm — Self-Described Role


Short 2–3 sentence bio beneath

5.1.3 Movements Teaser — 2 Cards

Card 1: MVOI — description + [Learn More]
Card 2: Ratel Movement — description + [Learn More]
Both link to movements.html with anchor

5.1.4 Latest News Strip

Pull 3 latest news cards (manually populated or via JSON)
Each: thumbnail, headline, date, [Read More]
Link to news.html

5.1.5 Quote / Pull Statement

Full-width dark band with Playfair italic quote:

"My goal in life is not to become wealthy but to render help to people I can."
— Martins Vincent Otse



5.1.6 Footer
CSS Notes (home.css):

Hero uses min-height: 100vh, background-attachment: fixed for parallax feel
Stat cards use CSS counter or direct HTML numbers with .stat-number class in Bebas Neue at 4rem
Cards use hover: translateY(-4px) with box-shadow in red tint

JS Notes (home.js):

Intersection Observer for scroll-reveal animations on stats and cards
Optional: typewriter effect on hero subline


PAGE 2 — VDM PROFILE (profile.html)
Purpose: Comprehensive public biography of Martins Vincent Otse.
Sections:
5.2.1 Profile Hero

Split layout: left = large portrait photo, right = name, alias, born, origin, education, tagline
Red accent vertical bar separating columns

5.2.2 Biography

"Early Life" — Born April 8, 1994, raised in Abuja, originates from Agenebode, Edo State. Educated at University of Lagos (Business Administration).
"Rise to Prominence" — Started social media career 2022. Gained following through interactions with Nigerian celebrities and viral advocacy videos. By 2023 was nationally known.
"Style & Philosophy" — Self-described "online police." Rejects wealth. Champions accountability, anti-corruption, justice for ordinary Nigerians.
"Public Recognition" — Nominated: Silverbird Most Influential Social Media Influencer 2024. Endorsed by Davido. Massive TikTok/Instagram following.

5.2.3 Key Advocacy Areas — Icon grid or card row:

Consumer Protection (Jenny's Glow NAFDAC campaign)
Anti-Corruption & Accountability
Child Trafficking / Human Rights
Youth Empowerment
Mental Health Awareness

5.2.4 Timeline

Vertical timeline (CSS-only):

2022 — Launched advocacy on Instagram/TikTok
2023 — National fame; NAFDAC campaign; Davido endorsement
Oct 2024 — Launched MVOI, raised ₦30M in hours
Jan 2025 — Opened MVOI financials to public
Apr 2025 — Donated ₦20M to NAPTIP (child trafficking)
Jul 2025 — MVOI office unveiled
Nov 2025 — Ratel Movement nationwide community sanitation drive



5.2.5 Controversies & Legal

Brief, factual section on arrests, defamation suits, and ongoing court matters
Neutral tone — "Public figures face public scrutiny" framing

5.2.6 Social Media Links
CSS Notes (profile.css):

Timeline built with ::before pseudo-element for the vertical red line
Portrait photo with subtle red drop-shadow or border glow
Biography sections use alternating left-padding for visual rhythm

JS Notes (profile.js):

Smooth scroll to sections via anchor links
Scroll-progress indicator bar at top of page (thin red line)


PAGE 3 — MOVEMENTS (movements.html)
Purpose: Dedicated page for VDM's two organized civic structures.
Sections:
5.3.1 Movements Hero

Full-width banner: "PEOPLE-POWERED. PURPOSE-DRIVEN."
Subline: "Two structures. One mission. A more accountable Nigeria."
Two anchor jump-links: [MVOI] | [Ratel Movement]


5.3.2 MVOI Section id="mvoi"

Logo / name display
About: The Martins Vincent Otse Initiative (MVOI) is VDM's registered non-governmental organisation. Launched October 2024, it raised over ₦30 million in donations within hours of launch. The NGO is the formal vehicle through which VDM channels humanitarian funding and project implementation.
Mission: Education, clean water, disaster relief, youth empowerment, and community development.
Transparency: Financial records are publicly accessible at mvoi4all.com and at Zenith Bank, Wuse Zone 3 Branch, Abuja. As of reporting, the NGO has raised ₦377,499,923, invested ₦112,094,360 in projects, and holds an available balance of ₦265,405,563.
Notable Actions:

₦20M donated to NAPTIP for trafficked children repatriation from Ivory Coast (April 2025)
Community development projects in underserved areas of Nigeria and Ghana
Office unveiled July 2025 as public complaint/support hub


CTA: [Visit mvoi4all.com] (external link) | [Make a Donation]

Financials Display:
┌────────────────────────┐
│ TOTAL RAISED           │
│ ₦377,499,923           │
├────────────────────────┤
│ INVESTED IN PROJECTS   │
│ ₦112,094,360           │
├────────────────────────┤
│ AVAILABLE BALANCE      │
│ ₦265,405,563           │
└────────────────────────┘

5.3.3 Ratel Movement Section id="ratel"

Logo / name display
About: The Ratel Movement is a loosely organised, online-driven civic initiative. VDM has described its supporters as a "fourth arm of government" — a mass civic check on power, operating outside formal state structures. Named after the honey badger (ratel) — fearless, relentless, unintimidated.
Nature: Not a registered body; a social movement whose energy is channelled through shared values and online mobilisation.
Key Actions:

Nationwide community sanitation drives commencing November 29, 2025 (monthly)
Civic advocacy campaigns, protest support, accountability petitions
Online solidarity and amplification of accountability cases


VDM Quote: "We are not shutting down the country with violence — but with impact."
How to Join: Follow VDM on Instagram/TikTok; participate in community events; support MVOI


5.3.4 Comparison Card
MVOIRatel MovementTypeRegistered NGOCivic/Online MovementStructureFormalLoosely organisedLegal StatusRegisteredInformalPrimary RoleHumanitarian funding & projectsOnline activism & civic actionWebsitemvoi4all.comSocial media
CSS Notes (movements.css):

Two sections visually distinguished: MVOI in deep black with gold accents; Ratel in charcoal with red accents
Financials block uses display: grid with animated counter (count-up via JS)
Comparison table fully responsive

JS Notes (movements.js):

CountUp animation on financial figures when section enters viewport
Anchor smooth-scroll for #mvoi and #ratel from navbar dropdown


PAGE 4 — BUSINESS (business.html)
Purpose: Document VDM's commercial activities and income streams.
Sections:
5.4.1 Business Overview

Intro statement: VDM's business activities are intentionally kept modest in line with his stated philosophy that "money is only a distraction to the course of seeking justice." However, his platform sustains several income-generating activities that fund his lifestyle and advocacy.

5.4.2 Business Streams — Cards:

Content Creation — Instagram, TikTok, Facebook, YouTube. Revenue from views, brand mentions, and platform monetisation. VDM started monetising content in 2022.
Brand Deals & Sponsorships — Select partnerships with Nigerian brands that align with his advocacy stance.
Speaking & Appearances — Public event appearances, media interviews, panel discussions.
Crowdfunding Support — Contributions from supporters on social media for specific causes.
MVOI Administrative Revenue — Portions of NGO operational budget cover associated costs.

5.4.3 Philosophy on Wealth

Pull quote section:

"I have rejected millions offered to me by well-meaning Nigerians. My goal is not to become wealthy."



5.4.4 Business Inquiry CTA

Link to contact.html with subject pre-fill: Business Enquiry

CSS Notes (business.css):

Business stream cards arranged in a 2×3 grid
"Philosophy" section as a full-bleed dark panel with Playfair italic quote
Minimal, restrained aesthetic for this page — professionalism over hype

JS Notes (business.js):

Card hover: subtle red underline reveal animation
CTA button pre-fills contact form subject via URL parameter (?subject=Business+Enquiry)


PAGE 5 — PARTNERS (partners.html)
Purpose: Showcase verified partnerships and open partnership opportunities.
Sections:
5.5.1 Partners Hero

Headline: "BUILDING ACCOUNTABILITY TOGETHER"
Subline: Institutions, organisations and brands that stand with VDM's mission.

5.5.2 Notable Partnerships / Collaborations

NAPTIP (National Agency for the Prohibition of Trafficking in Persons) — MVOI donated ₦20M through Ratel Movement (April 2025) for repatriation of trafficked children.
Zenith Bank — Institutional partner for MVOI financial transparency.
Nigerian Civil Society Groups — Collaborative advocacy campaigns.
Celebrity Endorsements — Davido (2023 public endorsement); Korra Obidi.
Note: Partnership logos should only be displayed with written permission from each entity.

5.5.3 Partnership Tiers / Opportunities
CIVIC PARTNER       — NGOs, advocacy groups, government agencies
MEDIA PARTNER       — Press, podcasts, digital media platforms
CORPORATE SPONSOR   — Brands aligned with accountability and youth
COMMUNITY PARTNER   — Grassroots and local organisations
Each tier: brief description of what the partnership entails and mutual benefits.
5.5.4 Become a Partner CTA

Link to contact.html with ?subject=Partnership+Enquiry
Downloadable partnership brief (PDF — optional future asset)

CSS Notes (partners.css):

Logo grid: display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))
Partnership tier cards with left-border color-coding (red, gold, gray variants)
Grayscale logos that shift to full color on hover

JS Notes (partners.js):

Logo hover colour reveal via filter: grayscale(0) transition
CTA pre-fills contact form subject


PAGE 6 — NEWS (news.html)
Purpose: Latest updates, press coverage, and announcements about VDM, MVOI, and Ratel.
Sections:
5.6.1 News Hero

Headline: "VDM UPDATE"
Search bar (filters articles client-side)
Category tabs: All | MVOI | Ratel | Legal | Advocacy | Media

5.6.2 News Grid

3-column responsive card grid
Each card: Featured image, category tag (colour-coded), headline, date, excerpt, [Read More] link
Cards sorted: newest first

5.6.3 Featured/Sticky Story

One full-width card at the top for the most important current story

5.6.4 Pagination or "Load More" Button
Seed News Items to pre-populate:
DateHeadlineCategoryJul 2025VDM Unveils New MVOI Office in AbujaMVOIApr 2025VDM Donates ₦20M to NAPTIP for Trafficked ChildrenMVOI / AdvocacyJan 2026MVOI Financial Records Opened to PublicMVOINov 2025Ratel Movement Begins Nationwide Community SanitationRatelMay 2025VDM Arrested, Released After 5 Days on Administrative BailLegalSep 2025VDM Mobilises Ratel for Monthly Civic ActionRatel
CSS Notes (news.css):

Grid: grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
Category pills: colour-coded (MVOI = gold, Ratel = red, Legal = gray, Advocacy = white)
Cards with left-border accent matching category colour

JS Notes (news.js):
javascript// Article data array — update as needed
const articles = [
  {
    id: 1,
    title: "VDM Unveils New MVOI Office in Abuja",
    category: "MVOI",
    date: "2025-07-21",
    excerpt: "Social media activist VeryDarkMan gave followers a first look...",
    image: "assets/images/news/mvoi-office.jpg",
    url: "#"
  },
  // ... more items
];

// Filter function — runs on tab click and search input
function filterArticles(category, searchTerm) {
  return articles.filter(a => {
    const matchCat = category === 'All' || a.category === category;
    const matchSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });
}

PAGE 7 — CONTACT (contact.html)
Purpose: Allow supporters, press, businesses, and partners to reach out.
Sections:
5.7.1 Contact Hero

Headline: "GET IN TOUCH"
Subline: For media enquiries, partnership proposals, MVOI complaints, or support.

5.7.2 Contact Form
html<form id="contactForm" novalidate>
  <div class="form-group">
    <label for="fullName">Full Name *</label>
    <input type="text" id="fullName" name="fullName" required placeholder="Your name" />
  </div>

  <div class="form-group">
    <label for="email">Email Address *</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com" />
  </div>

  <div class="form-group">
    <label for="subject">Subject *</label>
    <select id="subject" name="subject" required>
      <option value="">Select subject</option>
      <option value="General Enquiry">General Enquiry</option>
      <option value="Media / Press">Media / Press</option>
      <option value="Partnership Enquiry">Partnership Enquiry</option>
      <option value="Business Enquiry">Business Enquiry</option>
      <option value="MVOI / Donation">MVOI / Donation</option>
      <option value="Ratel Movement">Ratel Movement</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" rows="6" required placeholder="Your message..."></textarea>
  </div>

  <button type="submit" class="btn-submit">Send Message</button>
  <div id="formStatus" class="form-status"></div>
</form>
5.7.3 Contact Info Cards

MVOI Office: Abuja, Nigeria (Wuse Zone 3 area)
MVOI Website: mvoi4all.com
Instagram: @verydarkblackman
TikTok: @verydarkman

5.7.4 Disclaimer

"This contact form is for official communications only. This website is not affiliated with any government agency."

CSS Notes (contact.css):

Form inputs: dark background (#1C1C1C), red focus border (border-color: var(--red-primary))
Submit button: full-width on mobile, red background, white text
Success/error states via .form-status.success and .form-status.error

JS Notes (contact.js):
javascript// Pre-fill subject from URL param
const params = new URLSearchParams(window.location.search);
const subjectParam = params.get('subject');
if (subjectParam) {
  document.getElementById('subject').value = subjectParam;
}

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Validate all required fields
  // On success: show success message, optionally send via Formspree/EmailJS
  // On error: show field-level errors
});
Backend Integration Options:

Formspree (recommended free option): Replace form action with https://formspree.io/f/YOUR_ID
EmailJS: Client-side email sending without a backend server
Custom backend: Node.js/PHP if hosting allows server-side code


6. global.css — Structural Styles
css/* ===========================
   GLOBAL STYLES — global.css
   =========================== */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--black);
  color: var(--text-body);
  font-family: var(--font-body);
  line-height: 1.7;
  overflow-x: hidden;
}

/* NAVBAR */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s;
}

.navbar.scrolled { background: rgba(10,10,10,1); }

.brand-vdm {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--red-primary);
  letter-spacing: 0.1em;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--white);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active { color: var(--red-primary); }

/* DROPDOWN */
.dropdown { position: relative; }
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--charcoal);
  border: 1px solid var(--border);
  min-width: 200px;
  list-style: none;
  padding: 0.5rem 0;
}
.dropdown:hover .dropdown-menu { display: block; }
.dropdown-menu li a {
  display: block;
  padding: 0.6rem 1.2rem;
  font-size: 0.8rem;
}

/* HAMBURGER TOGGLE */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.nav-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: var(--white);
  transition: all 0.3s;
}

/* MOBILE */
@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-links {
    display: none;
    position: fixed;
    top: 60px; left: 0; right: 0;
    background: var(--dark-gray);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
  }
  .nav-links.open { display: flex; }
  .dropdown-menu { position: static; display: block; background: none; border: none; padding-left: 1rem; }
}

/* FOOTER */
.footer {
  background: var(--dark-gray);
  border-top: 1px solid var(--border);
  padding: 3rem 2rem;
  text-align: center;
}
.footer-brand {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--red-primary);
  margin-bottom: 0.5rem;
}
.footer-tagline {
  font-family: var(--font-accent);
  font-style: italic;
  color: var(--gold);
  margin-bottom: 1.5rem;
}
.footer-links, .footer-social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.footer-links a, .footer-social a {
  color: var(--light-gray);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s;
}
.footer-links a:hover, .footer-social a:hover { color: var(--red-primary); }
.footer-copy { color: var(--light-gray); font-size: 0.75rem; margin-top: 1rem; }

/* UTILITY CLASSES */
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.section { padding: 5rem 2rem; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 5rem);
  color: var(--white);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}
.section-subtitle { color: var(--light-gray); font-size: 1.1rem; margin-bottom: 3rem; }
.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-primary {
  background: var(--red-primary);
  color: var(--white);
}
.btn-primary:hover { background: var(--red-hover); transform: translateY(-2px); }
.btn-outline {
  background: transparent;
  color: var(--white);
  border: 1px solid var(--white);
}
.btn-outline:hover { border-color: var(--red-primary); color: var(--red-primary); }

/* SCROLL REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

7. global.js — Shared JavaScript
javascript// global.js

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Active nav link highlight
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPath) link.classList.add('active');
});

// Mobile hamburger toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => observer.observe(el));

8. Recommended Hosting & Deployment
OptionCostNotesGitHub PagesFreeBest for static HTML/CSS/JS sitesNetlifyFree tierDrag-and-drop deploy, form handlingVercelFree tierFast CDN, easy deployHostinger~₦2,000–5,000/moNigerian hosting, local support
Recommended Domain: verydarkman.com.ng or vdmofficial.ng
SSL: Always enable HTTPS (free via Let's Encrypt on most hosts).

9. SEO Metadata Checklist
Add to every page's <head>:
html<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="VeryDarkMan — Martins Vincent Otse" />
<meta property="og:description" content="Official website of VeryDarkMan, Nigerian activist, MVOI founder, and the voice of the Ratel Movement." />
<meta property="og:image" content="https://yourdomain.com/assets/images/vdm-og.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="VeryDarkMan — Martins Vincent Otse" />
<meta name="twitter:image" content="https://yourdomain.com/assets/images/vdm-og.jpg" />

<!-- Standard -->
<meta name="keywords" content="VeryDarkMan, VDM, Martins Vincent Otse, MVOI, Ratel Movement, Nigerian activist" />
<meta name="author" content="Martins Vincent Otse" />

10. Development Checklist
Setup

 Create folder structure as defined in Section 3.1
 Install Google Fonts (add to all pages)
 Set up global.css with all CSS variables and utility classes
 Set up global.js with navbar, scroll reveal, mobile toggle

Page Development Order (recommended)

 1. HOME — establishes visual language
 2. PROFILE — most content-heavy; test layout
 3. MOVEMENTS — dual-section, animated counters
 4. NEWS — JS filtering logic
 5. CONTACT — form validation, backend integration
 6. BUSINESS — straightforward cards
 7. PARTNERS — logos + tier cards

Pre-Launch

 All internal links tested on every page
 Responsive design tested: 375px (mobile), 768px (tablet), 1280px (desktop)
 All images compressed (use TinyPNG or Squoosh)
 SEO meta tags in place on every page
 Contact form backend connected and tested
 HTTPS enabled on hosting
 Favicon set
 Google Analytics or Umami analytics installed (optional)


11. Content Editorial Guidelines

Tone: Authoritative, bold, and civic-minded. Not promotional or sycophantic.
Person: Refer to him as "Martins Vincent Otse" formally, "VDM" in short-form.
Controversies: Present factually and neutrally. This is an informational site, not a PR site.
Quotes: Only use verified/sourced quotes from his own statements.
Images: Use only licensed or officially released images. Do not use paparazzi or unauthorised press photos.
Financial figures: Source from mvoi4all.com or cited official reports. Mark with date of data.
Updates: News page should be updated at minimum monthly.


12. Legal & Disclaimer Notes

Include a general disclaimer in the footer or a standalone page: "This website is an independent informational platform. All content is sourced from verified public sources."
Do not publish private information (home address, personal phone numbers).
Ensure MVOI financial figures are always dated and sourced.
Legal case information should be presented factually and without legal opinion.


End of Document — VDM Website Project Documentation v1.0Share#   v d m  
 