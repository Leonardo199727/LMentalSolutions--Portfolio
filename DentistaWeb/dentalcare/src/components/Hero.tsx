'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#F9FAFB] to-[#EBF4FF] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#10B981]/10 rounded-full blur-3xl animate-float delay-200"></div>
                <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[#2563EB]/5 rounded-full blur-2xl animate-float delay-400"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#D1FAE5] text-[#10B981] px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up">
                            <span className="text-lg">✨</span>
                            <span>+15 años de experiencia</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight font-['Outfit'] animate-fade-in-up delay-100">
                            Tu sonrisa en{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]">
                                manos expertas
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-[#4B5563] max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                            Cuidamos de tu salud bucal con tecnología de punta y un equipo de
                            profesionales comprometidos con tu bienestar. Tu confianza es nuestra prioridad.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                            <Link
                                href="#cita"
                                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
                            >
                                <span>Agendar cita</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="#servicios"
                                className="inline-flex items-center justify-center gap-2 border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#2563EB] hover:text-white transition-all duration-300"
                            >
                                <span>Conocer servicios</span>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 animate-fade-in-up delay-400">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-[#2563EB] font-['Outfit']">15+</div>
                                <div className="text-sm text-[#4B5563]">Años experiencia</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-[#2563EB] font-['Outfit']">5K+</div>
                                <div className="text-sm text-[#4B5563]">Pacientes felices</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-[#2563EB] font-['Outfit']">10</div>
                                <div className="text-sm text-[#4B5563]">Especialistas</div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-fade-in-right delay-200">
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main image container */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-3xl rotate-6 opacity-20"></div>
                            <div className="relative bg-white rounded-3xl overflow-hidden aspect-square shadow-2xl">
                                <Image
                                    src="/dentist-team.png"
                                    alt="Equipo de dentistas profesionales"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#D1FAE5] rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">⭐</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#111827]">4.9/5</div>
                                        <div className="text-xs text-[#4B5563]">Calificación</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float delay-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EBF4FF] rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#111827]">Certificados</div>
                                        <div className="text-xs text-[#4B5563]">Internacionales</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
