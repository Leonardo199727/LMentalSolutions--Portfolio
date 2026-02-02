'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function Contact() {
    const { language } = useLanguage();

    const whatsappLink = `https://wa.me/524423178782?text=${encodeURIComponent(
        language === 'es'
            ? 'Hola, me interesa agendar una sesión para conocer más sobre sus servicios.'
            : 'Hi, I would like to book a session to learn more about your services.'
    )}`;

    return (
        <section id="contact" className="section relative overflow-hidden">


            <div className="container relative z-10">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl text-center">

                        <div className="mb-32">
                            <h2 className="mb-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {t(translations.contact.title, language)}
                            </h2>
                            <p className="text-xl mx-auto text-center mt-12 w-full" style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                                {t(translations.contact.subtitle, language)}
                            </p>
                        </div>


                        <div className="mb-48">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary text-xl px-10 py-5 inline-flex items-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
                            >
                                <svg
                                    className="w-7 h-7"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                {t(translations.contact.ctaPrimary, language)}
                            </a>
                        </div>


                        <div className="flex items-center justify-center gap-4 mb-24 opacity-50">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-500" />
                            <span className="text-sm uppercase tracking-widest text-gray-400">
                                {language === 'es' ? 'Contacto Directo' : 'Direct Contact'}
                            </span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-500" />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                            <a
                                href="https://wa.me/524423178782"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center gap-4">
                                    <div className="p-3 rounded-full bg-green-500/10 text-green-400">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400 mb-1">WhatsApp</p>
                                        <p className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                                            +52 442 317 8782
                                        </p>
                                    </div>
                                </div>
                            </a>


                            <a
                                href="mailto:lmata795@gmail.com"
                                className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-center gap-4">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400 mb-1">Email</p>
                                        <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                            lmata795@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
