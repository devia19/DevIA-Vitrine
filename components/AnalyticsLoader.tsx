"use client";
import { useEffect, useState } from "react";

// Option A (env) : process.env.NEXT_PUBLIC_GA_ID
// Option B (const) : remplace ci-dessous si tu ne veux pas d'env
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const status = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : null;
    if (status === "accepted") setEnabled(true);

    const onAccept = () => setEnabled(true);
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  useEffect(() => {
    if (!enabled || !GA_ID) return;

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date()); gtag('config', '${GA_ID}');
    `;

    document.head.appendChild(s1);
    document.head.appendChild(s2);
    return () => { document.head.removeChild(s1); document.head.removeChild(s2); };
  }, [enabled]);

  return null;
}

