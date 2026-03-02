"use client";

import { useEffect, useRef } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhgGvPUSjEEZxyTlmno3Q-KCy7IThGGf1NRJ9hrbM9Qaoc9KZBMYYjhQdNxumEQzJY/exec";

function parseUA(ua: string) {
    let browser = "Bilinmiyor", os = "Bilinmiyor", device = "Masaüstü";
    if (/Mobi|Android/i.test(ua)) device = "Mobil";
    else if (/Tablet|iPad/i.test(ua)) device = "Tablet";
    if (/Edg\//i.test(ua)) browser = "Edge";
    else if (/OPR|Opera/i.test(ua)) browser = "Opera";
    else if (/Chrome/i.test(ua)) browser = "Chrome";
    else if (/Firefox/i.test(ua)) browser = "Firefox";
    else if (/Safari/i.test(ua)) browser = "Safari";
    const bv = ua.match(/(Chrome|Firefox|Safari|Edg|OPR)[\\/\s]([\d.]+)/i);
    if (bv) browser += " " + bv[2];
    if (/Windows NT 10/i.test(ua)) os = "Windows 10/11";
    else if (/Windows NT 6/i.test(ua)) os = "Windows 7/8";
    else if (/Mac OS X/i.test(ua)) os = "macOS";
    else if (/Android (\d+)/i.test(ua)) os = "Android " + RegExp.$1;
    else if (/iPhone OS ([\d_]+)/i.test(ua)) os = "iOS " + RegExp.$1.replace(/_/g, ".");
    else if (/Linux/i.test(ua)) os = "Linux";
    return { browser, os, device };
}

export default function VisitorTracker() {
    const tracked = useRef(false);

    useEffect(() => {
        // Localhost'ta çalışmasın
        if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return;
        if (tracked.current) return;
        // Aynı sekme oturumunda bir kez kaydet
        if (sessionStorage.getItem("visitor_tracked")) return;

        tracked.current = true;

        const ua = navigator.userAgent;
        const { browser, os, device } = parseUA(ua);

        const baseData = {
            language: navigator.language || "",
            screen: `${screen.width}x${screen.height}`,
            referrer: document.referrer || "",
            pageUrl: window.location.href,
            userAgent: ua,
            browser,
            os,
            device,
        };

        fetch("https://ipapi.co/json/", { cache: "no-store" })
            .then((r) => r.json())
            .then((geo) => {
                const payload = {
                    ...baseData,
                    ip: geo.ip || "",
                    country: geo.country_name || "",
                    city: geo.city || "",
                    region: geo.region || "",
                    isp: geo.org || "",
                    org: geo.asn || "",
                    timezone: geo.timezone || "",
                };
                return fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify(payload),
                });
            })
            .catch(() => {
                // Geo alınamazsa sadece temel veriyi gönder
                fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify(baseData),
                });
            })
            .finally(() => {
                sessionStorage.setItem("visitor_tracked", "true");
            });
    }, []);

    return null;
}
