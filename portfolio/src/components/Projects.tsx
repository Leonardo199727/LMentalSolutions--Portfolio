'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function Projects() {
    const { language } = useLanguage();

    // Placeholder projects for visual design (ready for future real projects)
    const placeholderProjects = [
        { color: 'var(--primary)', opacity: 0.15 },
        { color: 'var(--secondary)', opacity: 0.15 },
        { color: 'var(--accent)', opacity: 0.15 },
    ];

    return (
        <section id="projects" className="section relative overflow-hidden">
            {/* Background Orbs */}
            <div className="section-orb section-orb-primary" style={{ bottom: '-50px', left: '20%' }} />
            <div className="section-orb section-orb-secondary" style={{ top: '-80px', right: '-100px', animationDelay: '4s' }} />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-center">{t(translations.projects.title, language)}</h2>
                    <p className="text-base mx-auto text-center mt-2" style={{ color: 'var(--muted)' }}>
                        {t(translations.projects.subtitle, language)}
                    </p>
                </div>

                {/* Projects Grid - Centered */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                        {placeholderProjects.map((project, index) => (
                            <div
                                key={index}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color} 0%, var(--dark-secondary) 100%)`,
                                    border: '1px solid var(--dark-tertiary)',
                                }}
                            >
                                {/* Placeholder Pattern */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, var(--muted) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px',
                                    }}
                                />

                                {/* Coming Soon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                            style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                                        >
                                            <svg
                                                className="w-8 h-8"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                style={{ color: 'var(--muted)' }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                />
                                            </svg>
                                        </div>
                                        <span
                                            className="text-sm font-medium px-4 py-2 rounded-full"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                color: 'var(--muted)',
                                            }}
                                        >
                                            {language === 'es' ? 'Próximamente' : 'Coming soon'}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coming Soon Message */}
                <div className="text-center mt-12">
                    <p className="text-base mx-auto text-center" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                        {t(translations.projects.comingSoon, language)}
                    </p>
                </div>
            </div>
        </section>
    );
}
