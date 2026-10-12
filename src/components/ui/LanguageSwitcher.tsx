"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "te", label: "తెలుగు", sub: "Telugu", flag: "🇮🇳" },
  { code: "hi", label: "हिंदी", sub: "Hindi", flag: "🇮🇳" },
  { code: "ta", label: "தமிழ்", sub: "Tamil", flag: "🇮🇳" },
  { code: "kn", label: "ಕನ್ನಡ", sub: "Kannada", flag: "🇮🇳" },
  { code: "ml", label: "മലയാളം", sub: "Malayalam", flag: "🇮🇳" },
  { code: "es", label: "Español", sub: "Spanish", flag: "🇪🇸" },
  { code: "fr", label: "Français", sub: "French", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", sub: "German", flag: "🇩🇪" },
  { code: "ar", label: "العربية", sub: "Arabic", flag: "🇸🇦" },
  { code: "zh-CN", label: "中文", sub: "Chinese", flag: "🇨🇳" },
  { code: "ja", label: "日本語", sub: "Japanese", flag: "🇯🇵" },
  { code: "pt", label: "Português", sub: "Portuguese", flag: "🇧🇷" },
  { code: "ru", label: "Русский", sub: "Russian", flag: "🇷🇺" },
  { code: "it", label: "Italiano", sub: "Italian", flag: "🇮🇹" },
  { code: "ko", label: "한국어", sub: "Korean", flag: "🇰🇷" },
  { code: "nl", label: "Nederlands", sub: "Dutch", flag: "🇳🇱" },
  { code: "tr", label: "Türkçe", sub: "Turkish", flag: "🇹🇷" },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check existing cookie or detect from browser/locale
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z\-]+)/);
    let preferred = match ? match[1] : null;

    if (!preferred) {
      // Auto-detect based on user's system/browser locale
      const browserLang = (navigator.language || (navigator as any).userLanguage || "en").toLowerCase();
      if (browserLang.startsWith("te")) preferred = "te";
      else if (browserLang.startsWith("hi")) preferred = "hi";
      else if (browserLang.startsWith("ta")) preferred = "ta";
      else if (browserLang.startsWith("kn")) preferred = "kn";
      else if (browserLang.startsWith("ml")) preferred = "ml";
      else if (browserLang.startsWith("es")) preferred = "es";
      else if (browserLang.startsWith("fr")) preferred = "fr";
      else if (browserLang.startsWith("de")) preferred = "de";
      else if (browserLang.startsWith("ar")) preferred = "ar";
      else if (browserLang.startsWith("zh")) preferred = "zh-CN";
      else if (browserLang.startsWith("ja")) preferred = "ja";
      else if (browserLang.startsWith("pt")) preferred = "pt";
      else if (browserLang.startsWith("ru")) preferred = "ru";
      else if (browserLang.startsWith("it")) preferred = "it";
      else if (browserLang.startsWith("ko")) preferred = "ko";
      else if (browserLang.startsWith("nl")) preferred = "nl";
      else if (browserLang.startsWith("tr")) preferred = "tr";
      else preferred = "en";

      if (preferred !== "en") {
        changeLanguage(preferred);
      }
    } else {
      setCurrentLang(preferred);
    }

    // 2. Initialize Google Translate script once
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,te,hi,ta,kn,ml,es,fr,de,ar,zh-CN,ja,pt,ru,it,ko,nl,tr",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Close on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Set cookie for both current domain and host
    const cookieValue = `/en/${langCode}`;
    const domain = window.location.hostname;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;

    // Trigger google select element if available
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  const selected = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden translate container */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Modern Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language, currently ${selected.label}`}
        title="Change Language"
      >
        <Globe className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        <span className="text-sm leading-none mr-0.5" aria-hidden="true">{selected.flag}</span>
        <span className="font-medium">{selected.label}</span>
        <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Supported Languages"
          className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-100 py-1"
        >
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Select Language
          </div>
          <div className="py-1 max-h-64 overflow-y-auto">
            {languages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                    isSelected
                      ? "bg-primary-light/50 text-primary font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base" aria-hidden="true">{lang.flag}</span>
                    <span>
                      {lang.label}
                      {lang.sub && <span className="text-[10px] text-gray-400 ml-1.5 font-normal">({lang.sub})</span>}
                    </span>
                  </span>
                  {isSelected && <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
