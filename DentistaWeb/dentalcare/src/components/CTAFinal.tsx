'use client';

import Link from 'next/link';

export default function CTAFinal() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                        <span>✨</span>
                        <span>Primera consulta gratis</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] leading-tight">
                        ¿Listo para transformar{' '}
                        <span className="text-[#D1FAE5]">tu sonrisa?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Agenda tu primera consulta hoy y recibe un diagnóstico completo sin costo.
                        Tu sonrisa perfecta está a un clic de distancia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href="#cita"
                            className="group inline-flex items-center justify-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span>Agendar cita ahora</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <a
                            href="tel:+525512345678"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white hover:text-[#2563EB] transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Llamar ahora</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
