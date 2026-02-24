"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top-btn fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 cursor-pointer"
            style={{
                background: "var(--cy)",
                color: "var(--bg)",
                border: "none",
                boxShadow: "0 4px 24px rgba(34,211,238,0.4)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
}
