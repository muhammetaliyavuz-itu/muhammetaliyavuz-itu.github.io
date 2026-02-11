// =========================
// Naval Portfolio JS
// - Scroll reveal
// - Active nav highlight
// - Project filter
// - Modal details
// - Tiny “stars” canvas
// - Mobile menu
// - Theme toggle
// =========================

(function () {
  const $ = (q, el=document) => el.querySelector(q);
  const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));

  // Year
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
    });
    $$("#mobileNav a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("show")));
  }

  // Theme toggle (simple)
  const themeBtn = $("#themeBtn");
  if (themeBtn) {
    const saved = localStorage.getItem("theme");
    if (saved === "light") document.body.classList.add("light");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
    });
  }

  // Scroll reveal (IntersectionObserver)
  const revealEls = $$(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Active nav highlight
  const sections = ["about", "work", "skills", "writing", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navLinks = $$(".links a").filter(a => a.getAttribute("href")?.startsWith("#"));
  const activeById = (id) => {
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  };

  const io2 = new IntersectionObserver((entries) => {
    const vis = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio - a.intersectionRatio)[0];
    if (vis?.target?.id) activeById(vis.target.id);
  }, { rootMargin: "-40% 0px -55% 0px", threshold: [0.05, 0.15, 0.25] });
  sections.forEach(s => io2.observe(s));

  // Project filter
  const filters = $$(".filter");
  const cards = $$(".proj");
  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      cards.forEach(c => {
        const tags = (c.dataset.tags || "").split(" ");
        const ok = (f === "all") || tags.includes(f);
        c.classList.toggle("hide", !ok);
      });
    });
  });

  // Modal content map
  const MODALS = {
    m1: {
      title: "KCS Resistance CFD Workflow",
      bullets: [
        "Domain sizing & boundary conditions aligned with towing-tank logic",
        "Prism layer strategy for stable wall treatment (y+ aware)",
        "Convergence monitoring: residuals + force/drag history sanity checks",
        "Practical troubleshooting: negative drag in early iterations, stabilization behavior"
      ],
      tools: ["STAR-CCM+", "URANS", "y+", "Post-processing"]
    },
    m2: {
      title: "Prism Layer Stability Playbook",
      bullets: [
        "Leading-edge and fillet failures: why layers retract to 0",
        "Settings that matter: total thickness, min thickness, growth rate, surface sizing",
        "Curvature/proximity balance for tight radii (rudders, foils, appendages)",
        "Repeatable checklist to prevent ‘Delaunay cannot recover boundary’ loops"
      ],
      tools: ["Meshing", "Quality metrics", "Curvature", "Surface control"]
    },
    m3: {
      title: "Engineering Control GUI (Alicat)",
      bullets: [
        "Python GUI for serial control + robust logging",
        "Excel test-matrix scheduling and repeatable experiments",
        "Clean export formatting and error-safe runtime behavior",
        "Packaging to EXE for distribution"
      ],
      tools: ["Python", "asyncio", "pyserial", "pandas/openpyxl"]
    },
    m4: {
      title: "Vessel Concept & Scantling Studies",
      bullets: [
        "Rule-aware design thinking (structure, local scantlings mindset)",
        "Weight breakdown reasoning and documentation",
        "Clean drawings/sections and engineering communication",
        "Focus on deliverables: decisions, assumptions, and impact"
      ],
      tools: ["CAD", "Rules mindset", "Documentation", "Design"]
    },
    m5: {
      title: "Free-Surface (VOF) Study Notes",
      bullets: [
        "Time-step selection and stability constraints",
        "Surface deformation monitoring and non-physical oscillation prevention",
        "Where to refine (interface, wake, bow wave)",
        "Practical interpretation of results for design decisions"
      ],
      tools: ["VOF", "Transient", "URANS", "Monitoring"]
    },
    m6: {
      title: "Post-processing & Plot Automation",
      bullets: [
        "Standardized plots (forces, residuals, y+ maps, convergence summary)",
        "Automated table export for reports and presentations",
        "Repeatability: same script, different case → same output format",
        "Faster iteration cycles and less manual error"
      ],
      tools: ["Python", "Pandas", "Automation", "Reporting"]
    }
  };

  // Modal logic
  const modal = $("#modal");
  const modalContent = $("#modalContent");

  function openModal(key){
    const d = MODALS[key];
    if (!d || !modal || !modalContent) return;
    modalContent.innerHTML = `
      <h3>${d.title}</h3>
      <p><strong>Focus:</strong> engineering clarity, repeatability, and impact.</p>
      <ul>
        ${d.bullets.map(x => `<li>${x}</li>`).join("")}
      </ul>
      <p><strong>Tools:</strong> ${d.tools.join(" • ")}</p>
    `;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
  }
  function closeModal(){
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
  }

  $$(".proj-open").forEach(btn => btn.addEventListener("click", () => openModal(btn.dataset.modal)));
  if (modal) {
    modal.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.dataset && t.dataset.close) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  // Tiny stars canvas (subtle motion)
  const canvas = $("#stars");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H, stars;

    function resize(){
      W = canvas.width = window.innerWidth * devicePixelRatio;
      H = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      initStars();
    }

    function initStars(){
      const n = Math.min(140, Math.floor((window.innerWidth * window.innerHeight) / 14000));
      stars = Array.from({length:n}, () => ({
        x: Math.random()*W,
        y: Math.random()*H,
        r: (Math.random()*1.2 + 0.4) * devicePixelRatio,
        s: (Math.random()*0.35 + 0.10) * devicePixelRatio,
        a: Math.random()*0.35 + 0.12
      }));
    }

    function tick(){
      ctx.clearRect(0,0,W,H);
      // only a faint layer
      for (const p of stars){
        p.y += p.s;
        if (p.y > H + 10) { p.y = -10; p.x = Math.random()*W; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    resize();
    tick();
  }

  // Replace placeholder LinkedIn link quickly
  const li = $("#liLink");
  if (li) {
    li.href = "https://www.linkedin.com/"; // put your real link later
  }
})();
