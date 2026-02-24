"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experiences" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
    { href: "#references", label: "References" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [progress, setProgress] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [themeKey, setThemeKey] = useState(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "dark";
        setTheme(saved);
        // document.documentElement.setAttribute is already done in layout script to avoid initial flash,
        // but we keep it here to sync state in case it differs.
        document.documentElement.setAttribute("data-theme", saved);

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    const doc = document.documentElement;
                    const scrollTop = window.scrollY;
                    const scrollHeight = doc.scrollHeight - doc.clientHeight;
                    setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

                    const sections = ["home", "about", "experience", "projects", "education", "certifications", "contact", "references"];
                    let current = "home";
                    for (const id of sections) {
                        const el = document.getElementById(id);
                        if (el && el.getBoundingClientRect().top < 120) current = id;
                    }
                    setActiveSection(current);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        setThemeKey((k) => k + 1);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 75, behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
                style={{
                    background: scrolled ? "var(--card)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid var(--bdr)" : "none",
                    boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
                }}
            >
                {/* Desktop nav — Truly centered globally relative to entire <nav> width */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap pointer-events-none">
                    <ul className="flex items-center gap-8 pointer-events-auto relative">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <li key={link.href}>
                                    <a href={link.href}
                                        onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                        className="relative text-sm tracking-wide transition-all duration-300 group flex flex-col items-center"
                                        style={{ color: isActive ? "var(--cy)" : "var(--t2)", fontFamily: "var(--fb)", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.3px" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t1)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--cy)" : "var(--t2)")}>
                                        {link.label}
                                        <span className="transition-all duration-300"
                                            style={{ width: isActive ? "4px" : "0", height: isActive ? "4px" : "0", borderRadius: "50%", background: "var(--cy)", marginTop: "4px", boxShadow: isActive ? "0 0 8px var(--cy)" : "none", opacity: isActive ? 1 : 0 }} />
                                        <span className="absolute bottom-[-8px] left-0 w-0 h-[1.5px] group-hover:w-full transition-all duration-300" style={{ background: "var(--cy)" }} />
                                    </a>
                                </li>
                            );
                        })}


                    </ul>
                </div>

                <div className="w-full px-8 md:px-24 flex items-center justify-between h-[68px] relative pointer-events-none">
                    {/* Logo - Positioned left */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="text-lg font-bold tracking-wide flex items-center gap-1 group pointer-events-auto"
                        style={{ fontFamily: "var(--fh)" }}>
                        <span style={{ color: "var(--cy)" }} className="group-hover:scale-110 inline-block transition-transform">[</span>
                        <span style={{ color: "var(--t1)" }}>MAY</span>
                        <span style={{ color: "var(--cy)" }} className="group-hover:scale-110 inline-block transition-transform">]</span>
                    </a>

                    {/* Desktop Theme Toggle - Positioned right */}
                    <div className="hidden md:flex items-center gap-3 pointer-events-auto">
                        <button onClick={toggleTheme}
                            className="flex items-center justify-center w-[38px] h-[38px] rounded-lg border transition-all duration-300 cursor-pointer"
                            style={{ borderColor: "var(--bdr)", color: "var(--t2)", background: "transparent" }}
                            aria-label="Toggle theme"
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--cy)"; e.currentTarget.style.color = "var(--cy)"; e.currentTarget.style.background = "var(--cyd)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.color = "var(--t2)"; e.currentTarget.style.background = "transparent"; }}>
                            <span key={themeKey} className="theme-icon-enter flex items-center justify-center">
                                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Controls - Positioned right */}
                    <div className="flex md:hidden items-center gap-3 pointer-events-auto mr-4 md:mr-0">
                        <button onClick={toggleTheme}
                            className="flex items-center justify-center w-[38px] h-[38px] rounded-lg border transition-all duration-300 cursor-pointer"
                            style={{ borderColor: "var(--bdr)", color: "var(--t2)", background: "transparent" }}
                            aria-label="Toggle theme"
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--cy)"; e.currentTarget.style.color = "var(--cy)"; e.currentTarget.style.background = "var(--cyd)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.color = "var(--t2)"; e.currentTarget.style.background = "transparent"; }}>
                            <span key={themeKey} className="theme-icon-enter flex items-center justify-center">
                                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                            </span>
                        </button>
                        <button onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center justify-center w-[38px] h-[38px] rounded-lg border transition-all duration-300 cursor-pointer"
                            style={{ borderColor: "var(--bdr)", color: "var(--t2)", background: "transparent" }}
                            aria-label="Toggle menu">
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="mobile-menu-enter md:hidden absolute top-[68px] left-0 right-0"
                        style={{ background: "var(--card)", backdropFilter: "blur(20px)", borderTop: "1px solid var(--bdr)", padding: "1rem 2rem" }}>
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href}
                                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                className="block py-3 border-b transition-colors duration-200"
                                style={{ borderColor: "var(--bdr)", color: activeSection === link.href.slice(1) ? "var(--cy)" : "var(--t2)", fontFamily: "var(--fb)", fontSize: "0.88rem", fontWeight: 500 }}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
}
