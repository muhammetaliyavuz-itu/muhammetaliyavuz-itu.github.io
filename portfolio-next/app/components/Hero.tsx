"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const ROLES = [
    "Naval Architect",
    "CFD Engineer",
    "Software Developer",
];

function TypewriterRole({ words, speed = 80, pause = 2200 }: { words: string[], speed?: number, pause?: number }) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, wordIndex, words, speed, pause]);

    useEffect(() => {
        setText(words[wordIndex].slice(0, charIndex));
    }, [charIndex, wordIndex, words]);

    return (
        <span style={{ fontFamily: "var(--fb)", fontSize: "1.05rem", fontWeight: 500, color: "var(--cy)", letterSpacing: "0.3px" }}>
            {text}
            <span style={{ display: "inline-block", width: "2px", height: "1em", background: "var(--cy)", marginLeft: "2px", verticalAlign: "middle", animation: "blink 0.9s step-end infinite" }} />
        </span>
    );
}

function AnimatedCounterStat({ target, decimals = 0, duration = 2000, label, unit, color }: { target: number, decimals?: number, duration?: number, label: string, unit: string, color: string }) {
    const [value, setValue] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) {
                setStarted(true);
            }
        }, { threshold: 0.5 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const startTime = performance.now();
        const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(eased * target);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, target, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-1">
            <span style={{ fontFamily: "var(--fh)", fontSize: "2.2rem", fontWeight: 700, color: color, letterSpacing: "-1px", lineHeight: 1 }}>
                {value.toFixed(decimals)}
                <span style={{ fontSize: "0.95rem", opacity: 0.6 }}>{unit === "/ 4.0" ? " / 4.0" : unit}</span>
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "var(--fb)", fontWeight: 500, marginTop: "0.6rem" }}>
                {label}
            </span>
        </div>
    );
}

function DepthBadge() {
    const [depth, setDepth] = useState(0);
    const [scrollDepth, setScrollDepth] = useState(0);

    useEffect(() => {
        let ticking = false;
        const update = () => {
            const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const d = Math.round(pct * 420);
            setScrollDepth(d);
            ticking = false;
        };
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        let v = 0;
        const target = 38;
        const step = () => {
            v += 1;
            setDepth(v);
            if (v < target) requestAnimationFrame(step);
        };
        const t = setTimeout(() => requestAnimationFrame(step), 800);
        return () => clearTimeout(t);
    }, []);

    const displayDepth = scrollDepth > 0 ? scrollDepth : depth;

    return (
        <div className="flex justify-center mb-6" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>
            <span className="hero-depth-badge" style={{ fontFamily: "var(--fm)", fontSize: "0.72rem" }}>
                <span className="dot" />
                DEPTH: {displayDepth}m — Naval Architecture &amp; Ocean Engineering · ITU · b. August 2003
            </span>
        </div>
    );
}

export default function Hero() {
    const subRef = useRef<HTMLDivElement>(null);
    const blipRef = useRef<HTMLDivElement>(null);

    const handleMagnetic = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    }, []);

    const resetMagnetic = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.transform = "translate(0, 0)";
    }, []);

    useEffect(() => {
        let raf: number;
        const track = () => {
            const sub = subRef.current;
            const blip = blipRef.current;
            if (!sub || !blip) { raf = requestAnimationFrame(track); return; }
            const rect = sub.getBoundingClientRect();
            const vw = window.innerWidth;
            const subCenterX = rect.left + rect.width / 2;
            const subCenterY = rect.top + rect.height / 2;
            if (subCenterX > vw * 0.5 && subCenterX < vw * 0.98) {
                const sonar = document.querySelector(".sonar-wrapper");
                if (sonar) {
                    const sr = sonar.getBoundingClientRect();
                    const rx = ((subCenterX - sr.left) / sr.width) * 100;
                    const ry = ((subCenterY - sr.top) / sr.height) * 100;
                    blip.style.left = Math.max(8, Math.min(92, rx)) + "%";
                    blip.style.top = Math.max(8, Math.min(92, ry)) + "%";
                    blip.classList.add("active");
                }
            } else {
                blip.classList.remove("active");
            }
            raf = requestAnimationFrame(track);
        };
        raf = requestAnimationFrame(track);
        return () => cancelAnimationFrame(raf);
    }, []);

    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${(i * 5.1) % 100}%`,
        size: `${2 + (i % 4)}px`,
        duration: `${14 + (i % 10) * 2.5}s`,
        delay: `${(i * 1.7) % 10}s`,
        opacity: 0.1 + (i % 5) * 0.04,
    }));

    const shapes = [
        { type: "hexagon", top: "15%", left: "8%", size: 40, delay: "0s", dur: "22s" },
        { type: "circle", top: "70%", left: "12%", size: 30, delay: "3s", dur: "18s" },
        { type: "triangle", top: "25%", right: "15%", size: 35, delay: "6s", dur: "25s" },
        { type: "circle", top: "60%", right: "8%", size: 25, delay: "9s", dur: "20s" },
        { type: "hexagon", top: "80%", left: "45%", size: 28, delay: "4s", dur: "24s" },
        { type: "diamond", top: "10%", right: "30%", size: 22, delay: "7s", dur: "19s" },
    ];

    return (
        <section
            className="min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay"
            id="home"
            style={{ padding: "7rem 2rem 5rem" }}
        >
            {/* Ocean Background */}
            <div
                className="ocean-bg absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% -10%, #0c4a6e 0%, #071524 50%, #020617 100%)",
                }}
            >
                <div className="aurora-glow" style={{ top: "-15%", left: "10%", background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)" }} />
                <div className="aurora-glow" style={{ bottom: "-10%", right: "5%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", animationDelay: "4s" }} />
                <div className="aurora-glow" style={{ top: "40%", left: "50%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", animationDelay: "8s" }} />

                <div className="absolute inset-0 pointer-events-none">
                    {particles.map((p) => (
                        <span key={p.id} className="absolute rounded-full"
                            style={{ width: p.size, height: p.size, background: p.id % 3 === 0 ? "rgba(34,211,238,0.6)" : p.id % 3 === 1 ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.4)", left: p.left, bottom: "-20px", opacity: p.opacity, animation: `particleFloat ${p.duration} linear infinite`, animationDelay: p.delay }}
                        />
                    ))}
                </div>

                {shapes.map((s, i) => (
                    <div key={i} className={i % 2 === 0 ? "floating-shape" : "floating-shape-slow"}
                        style={{ top: s.top, left: s.left, right: s.right, width: `${s.size}px`, height: `${s.size}px`, border: `1px solid ${i % 3 === 0 ? "rgba(34,211,238,0.4)" : i % 3 === 1 ? "rgba(59,130,246,0.35)" : "rgba(249,115,22,0.3)"}`, borderRadius: s.type === "circle" ? "50%" : s.type === "diamond" ? "4px" : s.type === "hexagon" ? "6px" : "0", transform: s.type === "diamond" ? "rotate(45deg)" : s.type === "triangle" ? "rotate(30deg)" : "none", animationDelay: s.delay, animationDuration: s.dur }}
                    />
                ))}

                {[15, 35, 55, 75, 92].map((pct, i) => (
                    <div key={i} className="absolute left-0 right-0 pointer-events-none"
                        style={{ top: `${pct}%`, height: "1px", background: `linear-gradient(90deg, transparent, rgba(34,211,238,${0.04 - i * 0.005}), transparent)` }}
                    />
                ))}

                <div ref={subRef} className="absolute"
                    style={{ top: "42%", left: "-320px", width: "200px", opacity: 0.3, animation: "swim 45s linear infinite", zIndex: 1 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/theme/submarine.svg" alt="Submarine" className="w-full h-auto" />
                </div>

                <div className="fish-school">
                    {[{ delay: "0s", dur: "20s", top: "22%", size: 24 }, { delay: "7s", dur: "26s", top: "62%", size: 18 }, { delay: "14s", dur: "30s", top: "48%", size: 14 }, { delay: "3s", dur: "22s", top: "35%", size: 20 }].map((fish, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={i} src="/images/theme/fish.svg" alt="" className="absolute" style={{ width: `${fish.size}px`, top: fish.top, opacity: 0.2, animation: `fishSwim ${fish.dur} linear infinite`, animationDelay: fish.delay }} />
                    ))}
                </div>
            </div>

            {/* Sonar */}
            <div className="sonar-wrapper absolute pointer-events-none" style={{ right: "7%", top: "50%", transform: "translateY(-50%)", width: "260px", height: "260px", opacity: 0.55, zIndex: 0 }}>
                <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(34,211,238,0.12)" }}>
                    {[20, 40, 60].map((pct) => (<div key={pct} className="absolute rounded-full" style={{ inset: `${pct}%`, border: `1px solid rgba(34,211,238,${0.12 - pct * 0.001})` }} />))}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px]" style={{ background: "rgba(34,211,238,0.07)" }} />
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px]" style={{ background: "rgba(34,211,238,0.07)" }} />
                </div>
                <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,0.18) 35deg, rgba(34,211,238,0.04) 55deg, transparent 65deg)", animation: "sonarSweep 4s linear infinite" }} />
                <div ref={blipRef} className="blip-dot" />
            </div>

            {/* Grid overlay */}
            <div className="grid-bg absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(34,211,238,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

            {/* HERO CONTENT */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <DepthBadge />

                {/* Name */}
                <h1 style={{ fontFamily: "var(--fh)", fontSize: "clamp(3.2rem, 9vw, 6.5rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-2px", animation: "fadeUp 0.7s ease 0.2s both", marginBottom: "1.2rem" }}>
                    <span style={{ color: "var(--t1)", display: "block" }}>Muhammet Ali</span>
                    <span className="hero-name-accent" style={{ background: "linear-gradient(90deg, var(--cy), var(--bl), var(--cy))", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "fadeUp 0.7s ease 0.25s both, shimmer 4s linear 1s infinite" }}>
                        Yavuz
                    </span>
                </h1>

                {/* Role — readable font */}
                <div style={{ height: "2rem", marginBottom: "3rem", animation: "fadeUp 0.7s ease 0.35s both" }}>
                    <TypewriterRole words={ROLES} />
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-10 mb-20 flex-wrap" style={{ animation: "fadeUp 0.7s ease 0.45s both" }}>
                    <AnimatedCounterStat target={3.26} decimals={2} duration={2500} label="GPA" unit="/ 4.0" color="var(--cy)" />
                    <AnimatedCounterStat target={6} decimals={0} duration={2000} label="CFD Projects" unit="+" color="var(--bl)" />
                    <AnimatedCounterStat target={3} decimals={0} duration={1800} label="Internships" unit="+" color="var(--or)" />
                </div>

                {/* CTA Buttons — expanded gap and enhanced glow */}
                <div className="flex justify-center gap-6 flex-wrap mt-8" style={{ animation: "fadeUp 0.7s ease 0.55s both" }}>
                    <a href="#projects"
                        onClick={(e) => { e.preventDefault(); const el = document.querySelector("#projects"); if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 75, behavior: "smooth" }); }}
                        onMouseMove={handleMagnetic} onMouseLeave={(e) => { resetMagnetic(e); e.currentTarget.style.boxShadow = "0 4px 20px rgba(34,211,238,0.25)"; e.currentTarget.style.transform = "scale(1)"; }}
                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(34,211,238,0.6)"; e.currentTarget.style.transform = "scale(1.05)"; }}
                        className="inline-flex items-center gap-2 rounded-full transition-all duration-300"
                        style={{ padding: "1rem 2.2rem", background: "linear-gradient(135deg, var(--cy), var(--bl))", color: "#fff", fontFamily: "var(--fb)", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.5px", boxShadow: "0 4px 20px rgba(34,211,238,0.25)" }}>
                        View Projects →
                    </a>
                    <a href="/docs/cv.html?download=true" target="_blank"
                        onMouseMove={handleMagnetic}
                        onMouseLeave={(e) => { resetMagnetic(e); e.currentTarget.style.borderColor = "rgba(148,163,184,0.2)"; e.currentTarget.style.color = "var(--t1)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--cy)"; e.currentTarget.style.color = "var(--cy)"; e.currentTarget.style.background = "rgba(34,211,238,0.08)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.2) inset"; e.currentTarget.style.transform = "scale(1.05)"; }}
                        className="inline-flex items-center gap-2 rounded-full border transition-all duration-300"
                        style={{ padding: "1rem 2.2rem", borderColor: "rgba(148,163,184,0.2)", color: "var(--t1)", fontFamily: "var(--fb)", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.5px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.04)" }}>
                        Download CV ↓
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ animation: "fadeUp 0.7s ease 0.9s both" }}>
                <div className="overflow-hidden" style={{ width: "1px", height: "40px" }}>
                    <div className="w-full h-full" style={{ background: "linear-gradient(var(--cy), transparent)", animation: "scrollDown 2s ease infinite" }} />
                </div>
                <span style={{ fontFamily: "var(--fb)", fontSize: "0.7rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "3px", fontWeight: 500 }}>Scroll</span>
            </div>
        </section>
    );
}

