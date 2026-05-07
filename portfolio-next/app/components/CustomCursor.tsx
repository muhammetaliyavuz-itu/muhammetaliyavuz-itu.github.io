"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: -100, y: -100 });
    const smoothRef = useRef({ x: -100, y: -100 });
    const rafRef = useRef<number>(0);
    const [mounted, setMounted] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        setMounted(true);

        const onMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
        };

        const onEnter = () => setIsHover(true);
        const onLeave = () => setIsHover(false);

        const bindLinks = () => {
            document.querySelectorAll("a, button, [role='button'], [tabindex='0'], .cursor-pointer, input, textarea, select").forEach((el) => {
                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        };

        const animate = () => {
            const cursor = cursorRef.current;
            const dot = dotRef.current;
            if (cursor && dot) {
                const { x, y } = posRef.current;
                const s = smoothRef.current;
                s.x += (x - s.x) * 0.14;
                s.y += (y - s.y) * 0.14;
                cursor.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
                dot.style.transform = `translate(${s.x - 3}px, ${s.y - 3}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", onMove);
        bindLinks();
        rafRef.current = requestAnimationFrame(animate);

        const mutObs = new MutationObserver(bindLinks);
        mutObs.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafRef.current);
            mutObs.disconnect();
        };
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div ref={cursorRef} className={`custom-cursor${isHover ? " cursor-hover" : ""}`} aria-hidden="true">
                <div className="cursor-h-line" />
                <div className="cursor-v-line" />
                <div className="cursor-corner tl" />
                <div className="cursor-corner tr" />
                <div className="cursor-corner bl" />
                <div className="cursor-corner br" />
            </div>
            <div ref={dotRef} className={`custom-cursor-dot${isHover ? " cursor-dot-hover" : ""}`} aria-hidden="true" />
        </>
    );
}
