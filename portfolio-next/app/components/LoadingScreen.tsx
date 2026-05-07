"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("may_loaded")) {
            setVisible(false);
            return;
        }
        const t1 = setTimeout(() => setFadeOut(true), 2400);
        const t2 = setTimeout(() => {
            setVisible(false);
            if (typeof sessionStorage !== "undefined") {
                sessionStorage.setItem("may_loaded", "1");
            }
        }, 3000);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    if (!visible) return null;

    return (
        <div className={`loading-screen${fadeOut ? " loading-fade-out" : ""}`} aria-hidden="true">
            {/* Sonar radar */}
            <div className="ls-sonar">
                <div className="ls-ring" style={{ animationDelay: "0s" }} />
                <div className="ls-ring" style={{ animationDelay: "0.5s" }} />
                <div className="ls-ring" style={{ animationDelay: "1s" }} />
                <div className="ls-ring" style={{ animationDelay: "1.5s" }} />
                <div className="ls-sweep" />
                <div className="ls-axis-h" />
                <div className="ls-axis-v" />
                <div className="ls-center" />
                {/* Blip dots */}
                <div className="ls-blip" style={{ top: "28%", left: "62%", animationDelay: "0.8s" }} />
                <div className="ls-blip" style={{ top: "58%", left: "35%", animationDelay: "1.3s" }} />
                <div className="ls-blip" style={{ top: "42%", left: "74%", animationDelay: "1.9s" }} />
            </div>

            {/* Text */}
            <div className="ls-text">
                <span className="ls-logo">MAY</span>
                <span className="ls-sub">Initializing navigation systems</span>
            </div>

            {/* Progress */}
            <div className="ls-progress-track">
                <div className="ls-progress-bar" />
            </div>

            {/* Corner decorations */}
            <div className="ls-corner ls-corner-tl" />
            <div className="ls-corner ls-corner-tr" />
            <div className="ls-corner ls-corner-bl" />
            <div className="ls-corner ls-corner-br" />
        </div>
    );
}
