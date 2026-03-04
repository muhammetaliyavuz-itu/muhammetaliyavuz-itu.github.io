"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ background: "var(--bg2)", position: "relative" }}>
            <div className="footer-top-border" />
            <div className="w-full px-8 md:px-24 h-[100px] flex items-center gap-6">

                {/* Logo - Left aligned */}
                <div className="flex items-center gap-3 relative z-10">
                    <span className="text-lg font-bold tracking-wide" style={{ fontFamily: "var(--fh)" }}>
                        <span style={{ color: "var(--cy)", display: "inline-block", animation: "heartbeat 3s ease-in-out infinite" }}>[</span>
                        <span style={{ color: "var(--t1)" }}>MAY</span>
                        <span style={{ color: "var(--cy)", display: "inline-block", animation: "heartbeat 3s ease-in-out 0.15s infinite" }}>]</span>
                    </span>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Copyright + Socials grouped together */}
                <div className="hidden sm:flex items-center gap-4 z-10">
                    <p style={{ fontFamily: "var(--fb)", fontSize: "0.85rem", color: "var(--t3)", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>
                        © {year} Muhammet Ali Yavuz — Naval Architecture
                    </p>
                    <div className="flex gap-2">
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
            </div>

            {/* Mobile Copyright Text - Stacked Below */}
            <div className="block sm:hidden text-center z-10 my-4 pb-4">
                <p style={{ fontFamily: "var(--fb)", fontSize: "0.78rem", color: "var(--t3)", letterSpacing: "0.3px" }}>
                    © {year} Muhammet Ali Yavuz
                </p>
            </div>
        </footer>
    );
}
