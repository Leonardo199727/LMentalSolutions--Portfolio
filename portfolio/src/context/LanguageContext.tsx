'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language
function detectBrowserLanguage(): Language {
    if (typeof window === 'undefined') return 'es';

    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || 'es';
    const lang = browserLang.toLowerCase().split('-')[0];

    // Return 'en' if English variant, otherwise default to Spanish
    return lang === 'en' ? 'en' : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');
    const [isInitialized, setIsInitialized] = useState(false);

    // Detect language on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('lms-language') as Language | null;
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            setLanguage(savedLang);
        } else {
            const detectedLang = detectBrowserLanguage();
            setLanguage(detectedLang);
        }
        setIsInitialized(true);
    }, []);

    // Save language preference
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('lms-language', language);
        }
    }, [language, isInitialized]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
