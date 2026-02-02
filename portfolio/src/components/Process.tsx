'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function Process() {
    const { language } = useLanguage();

    const stepIcons = [
        // Discovery
        <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>,
        // Proposal
        <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        // Development
        <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>,
        // Launch
        <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
    ];

    return (
        <section id="process" className="section relative overflow-hidden" style={{ background: 'var(--dark-secondary)' }}>
            {/* Background Orbs */}
            <div className="section-orb section-orb-secondary" style={{ top: '100px', left: '-100px' }} />
            <div className="section-orb section-orb-accent" style={{ bottom: '-50px', right: '-80px', animationDelay: '5s' }} />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-center">{t(translations.process.title, language)}</h2>
                    <p className="text-base mx-auto text-center mt-2" style={{ color: 'var(--muted)' }}>
                        {t(translations.process.subtitle, language)}
                    </p>
                </div>

                {/* Process Steps - Centered */}
                <div className="flex justify-center">
                    <div className="w-full max-w-3xl">
                        {translations.process.steps.map((step, index) => (
                            <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                                {/* Timeline Line */}
                                {index < translations.process.steps.length - 1 && (
                                    <div
                                        className="absolute left-6 top-14 w-0.5 h-full -ml-px"
                                        style={{ background: 'var(--dark-tertiary)' }}
                                    />
                                )}

                                {/* Step Number with Icon */}
                                <div
                                    className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10"
                                    style={{
                                        background: 'var(--gradient-primary)',
                                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                                    }}
                                >
                                    {stepIcons[index]}
                                </div>

                                {/* Content */}
                                <div className="pt-1 flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span
                                            className="text-sm font-medium px-3 py-1 rounded"
                                            style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-light)' }}
                                        >
                                            {index + 1}
                                        </span>
                                        <h3 className="text-lg font-bold" style={{ color: 'var(--light)' }}>
                                            {t(step.title, language)}
                                        </h3>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                                        {t(step.description, language)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
