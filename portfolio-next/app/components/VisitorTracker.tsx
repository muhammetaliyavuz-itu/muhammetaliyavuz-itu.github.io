"use client";

import { useEffect, useRef } from "react";

export default function VisitorTracker() {
    const tracked = useRef(false);

    useEffect(() => {
        // Geliştirme ortamında (localhost) veya strict mode çift çalışmasında loglamayı önlemek için
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return;
        }

        if (tracked.current) return;

        // Aynı oturumda (sekme açıkken) sayfalar arası geçişte tekrar kaydetmesin
        const hasTrackedSession = sessionStorage.getItem("visitor_tracked");
        if (hasTrackedSession) return;

        const trackVisitor = async () => {
            tracked.current = true;
            try {
                // Ziyaretçinin IP ve Konum/Kurum bilgilerini alıyoruz
                const ipRes = await fetch("https://ipapi.co/json/");
                if (!ipRes.ok) return;
                const ipData = await ipRes.json();

                // Google E-Tablolar'a gönderilecek veriyi hazırlıyoruz
                const visitorData = {
                    ip: ipData.ip || "Bilinmiyor",
                    city: ipData.city || "Bilinmiyor",
                    country_name: ipData.country_name || "Bilinmiyor",
                    org: ipData.org || ipData.network || "Bilinmiyor",
                    userAgent: navigator.userAgent,
                    page: window.location.href,
                };

                // Kendi Google Script URL'niz
                const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnzBSqkxSC8o_q9i6IQNCEBykHBjHFycWescB_yLcM2S-p5YYZW4Bjlkpt8KUPX2Y/exec";

                await fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors", // CORS hatasını aşmak için
                    headers: {
                        "Content-Type": "text/plain", // Preflight isteğini önlemek için text/plain kullanıyoruz
                    },
                    body: JSON.stringify(visitorData),
                });

                // Bu oturum için loglandığını işaretliyoruz
                sessionStorage.setItem("visitor_tracked", "true");
            } catch (error) {
                console.error("Ziyaretçi takip hatası:", error);
            }
        };

        trackVisitor();
    }, []);

    return null; // Ekranda hiçbir şey göstermeyecek
}
