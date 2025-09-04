"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : null;
    if (!status) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => { localStorage.setItem("cookie-consent","declined"); setVisible(false); }} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-xl border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Cookies (promis, aucun raisin sec)</h2>
          <p className="text-sm text-gray-600 mb-4">
            On utilise des cookies pour la mesure d’audience (Google Analytics). Pas de pub, pas de suivi creepy. {" "}
            <a href="/politique-de-confidentialite" className="underline">En savoir plus</a>
          </p>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() => { localStorage.setItem("cookie-consent","declined"); setVisible(false); }}
              className="px-3 py-1.5 border rounded-md"
            >
              Refuser
            </button>
            <button
              onClick={() => { localStorage.setItem("cookie-consent","accepted"); setVisible(false); window.dispatchEvent(new Event("cookie-consent-accepted")); }}
              className="px-3 py-1.5 bg-blue-600 text-white rounded-md"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

