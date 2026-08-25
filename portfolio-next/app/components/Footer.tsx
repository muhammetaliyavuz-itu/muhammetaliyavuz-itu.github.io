"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ background: "var(--bg2)", position: "relative" }}>
            <div className="footer-top-border" />
            <div className="w-full h-[100px] relative flex items-center">

                {/* Logo - centered in left half (0% → 50%) → sits at 25% */}
                <div className="absolute left-1/4 -translate-x-1/2 z-10 flex items-center">
                    <span className="text-lg font-bold tracking-wide" style={{ fontFamily: "var(--fh)" }}>
                        <span style={{ color: "var(--cy)", display: "inline-block", animation: "heartbeat 3s ease-in-out infinite" }}>[</span>
                        <span style={{ color: "var(--t1)" }}>MAY</span>
                        <span style={{ color: "var(--cy)", display: "inline-block", animation: "heartbeat 3s ease-in-out 0.15s infinite" }}>]</span>
                    </span>
                </div>

                {/* Copyright - true center at 50% */}
                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <p style={{ fontFamily: "var(--fb)", fontSize: "0.85rem", color: "var(--t3)", letterSpacing: "0.3px", whiteSpace: "nowrap" }} className="pointer-events-auto">
                        © {year} Muhammet Ali Yavuz - Naval Architecture
                    </p>
                </div>

                {/* Socials - centered in right half (50% → 100%) → sits at 75% */}
                <div className="absolute left-3/4 -translate-x-1/2 z-10 flex gap-3">
                    {[
                        { icon: Github, href: "https://github.com/muhammetaliyavuz-itu", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/yavuzitu", label: "LinkedIn" },
                    ].map((s) => {
                        const Icon = s.icon;
                        return (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300"
                                style={{ borderColor: "var(--bdr)", color: "var(--t3)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--cy)"; e.currentTarget.style.color = "var(--cy)"; e.currentTarget.style.background = "var(--cyd)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(34,211,238,0.2)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.color = "var(--t3)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                                aria-label={s.label}>
                                <Icon size={16} />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Copyright Text */}
            <div className="block sm:hidden text-center z-10 my-4 pb-4">
                <p style={{ fontFamily: "var(--fb)", fontSize: "0.78rem", color: "var(--t3)", letterSpacing: "0.3px" }}>
                    © {year} Muhammet Ali Yavuz
                </p>
            </div>
        </footer>
    );
}
