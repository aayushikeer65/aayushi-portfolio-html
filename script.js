// Data
const works = [
  { title: "Logo Design", tag: "Brand Identity" },
  { title: "Banner Design", tag: "Web & Print" },
  { title: "Social Media Posts", tag: "Social Design" },
  { title: "Video Editing", tag: "Motion & Reels" },
  { title: "Thumbnail Design", tag: "YouTube & Shorts" },
  { title: "Brand Identity Suite", tag: "Complete Visual System" },
];

const services = [
  { icon: "🎨", title: "Logo Design", desc: "Memorable marks and wordmarks that capture your brand's soul at first glance.", deliverables: ["Primary Logo", "Variations", "Usage Guide"] },
  { icon: "📐", title: "Banner Design", desc: "Eye-catching banners for websites, events, and promotions that command attention.", deliverables: ["Web Banners", "Event Banners", "Ads"] },
  { icon: "📱", title: "Social Media Posts", desc: "Scroll-stopping posts, carousel designs and campaign visuals that grow your tribe.", deliverables: ["Post Grids", "Carousels", "Stories"] },
  { icon: "🎬", title: "Video Editing", desc: "Smooth cuts, color grading and motion graphics for reels, ads and promos.", deliverables: ["Reels", "Ads", "Promos"] },
  { icon: "🖼️", title: "Thumbnail Design", desc: "Click-worthy thumbnails for YouTube and shorts that stop the scroll.", deliverables: ["YouTube Thumbnails", "Shorts Covers", "Series Packs"] },
  { icon: "🪷", title: "Brand Identity", desc: "Complete visual systems — logos, color palettes, typography and brand guidelines.", deliverables: ["Logo Suite", "Brand Guidelines", "Stationery"] },
  { icon: "✒️", title: "Typography & Lettering", desc: "Custom wordmarks and Devanagari-Latin lettering with a poetic touch.", deliverables: ["Wordmarks", "Devanagari", "Calligraphy"] },
  { icon: "💻", title: "Web & UI Graphics", desc: "Landing page visuals, hero banners and design assets ready for the web.", deliverables: ["Hero Art", "Banners", "Icon Sets"] },
];

const process = [
  { n: "01", t: "Discover", d: "Listening to your story, audience and vision." },
  { n: "02", t: "Define", d: "Mood, palette and direction take their first breath." },
  { n: "03", t: "Design", d: "Crafting visuals with care, iteration and intent." },
  { n: "04", t: "Deliver", d: "Polished files, guidelines and a ready-to-launch kit." },
];

const skills = ["Logo Design","Banner Design","Social Media Posts","Video Editing","Thumbnail Design","Branding","Typography"];

// Render
document.getElementById("skillTags").innerHTML = skills.map(s => `<span>${s}</span>`).join("");

document.getElementById("workGrid").innerHTML = works.map((w, i) => `
  <article class="work-card">
    <div class="work-cover" style="filter:hue-rotate(${i * 18}deg)">
      <span>${w.title.split(" ")[0]}</span>
    </div>
    <div class="work-body">
      <h3>${w.title}</h3>
      <p>${w.tag}</p>
    </div>
  </article>
`).join("");

document.getElementById("servicesGrid").innerHTML = services.map(s => `
  <div class="service-card">
    <div class="service-icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <ul>${s.deliverables.map(d => `<li>${d}</li>`).join("")}</ul>
  </div>
`).join("");

document.getElementById("processGrid").innerHTML = process.map(p => `
  <div>
    <div class="process-num">${p.n}</div>
    <h4>${p.t}</h4>
    <p>${p.d}</p>
  </div>
`).join("");

// Mobile menu
const btn = document.getElementById("menuBtn");
const links = document.getElementById("navLinks");
btn.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

// Year
document.getElementById("year").textContent = new Date().getFullYear();
