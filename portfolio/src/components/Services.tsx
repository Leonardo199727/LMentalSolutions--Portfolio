'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

// Service Icons
const icons = {
    globe: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    ),
    code: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    layout: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
    ),
    lightbulb: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
};

export default function Services() {
    const { language } = useLanguage();

    return (
        <section id="services" className="section relative overflow-hidden">
            {/* Background Orbs */}
            <div className="section-orb section-orb-primary" style={{ top: '-100px', right: '-150px' }} />
            <div className="section-orb section-orb-secondary" style={{ bottom: '50px', left: '-100px', animationDelay: '3s' }} />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="mb-4">{t(translations.services.title, language)}</h2>
                    <p className="text-base mx-auto text-center mt-2" style={{ color: 'var(--muted)' }}>
                        {t(translations.services.subtitle, language)}
                    </p>
                </div>

                {/* Services Grid - Centered content */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                        {translations.services.items.map((service, index) => (
                            <div
                                key={index}
                                className="card p-8 group flex flex-col items-center text-center"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Icon - Centered */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 mx-auto"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
                                        color: 'var(--primary-light)',
                                    }}
                                >
                                    {icons[service.icon as keyof typeof icons]}
                                </div>

                                {/* Content - Centered */}
                                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--light)' }}>
                                    {t(service.title, language)}
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                                    {t(service.description, language)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
