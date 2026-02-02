'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

// Trust Icons
const icons = {
    handshake: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    message: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    ),
    check: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    rocket: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
};

export default function Trust() {
    const { language } = useLanguage();

    return (
        <section className="section relative overflow-hidden" style={{ background: 'var(--dark-secondary)' }}>
            {/* Background Orbs */}
            <div className="section-orb section-orb-accent" style={{ top: '50px', right: '10%' }} />
            <div className="section-orb section-orb-primary" style={{ bottom: '-100px', left: '-50px', animationDelay: '2s' }} />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="mb-4">{t(translations.trust.title, language)}</h2>
                    <p className="text-base mx-auto text-center mt-2" style={{ color: 'var(--muted)' }}>
                        {t(translations.trust.subtitle, language)}
                    </p>
                </div>

                {/* Trust Items Grid - Centered content with hover effects */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                        {translations.trust.items.map((item, index) => (
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
                                    {icons[item.icon as keyof typeof icons]}
                                </div>

                                {/* Content - Centered */}
                                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: 'var(--light)' }}>
                                    {t(item.title, language)}
                                </h3>
                                <p className="text-sm text-center" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                                    {t(item.description, language)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Highlighted Promise */}
                <div className="flex justify-center" style={{ marginTop: '5rem' }}>
                    <div
                        className="w-full max-w-4xl p-8 rounded-2xl text-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                    >
                        <p className="text-base font-medium text-center" style={{ color: 'var(--light-secondary)', lineHeight: '1.6' }}>
                            {language === 'es' ? (
                                <>
                                    &quot;Mi negocio crece con <span className="gradient-text font-bold">tus recomendaciones</span>. Por eso me comprometo a que tu proyecto realmente funcione.&quot;
                                </>
                            ) : (
                                <>
                                    &quot;My business grows with <span className="gradient-text font-bold">your referrals</span>. That&apos;s why I&apos;m committed to making your project truly work.&quot;
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
