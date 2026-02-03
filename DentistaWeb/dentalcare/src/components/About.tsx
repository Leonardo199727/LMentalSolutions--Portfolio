'use client';

import Image from 'next/image';

export default function About() {
    const stats = [
        { number: '15+', label: 'Años de experiencia' },
        { number: '5,000+', label: 'Pacientes felices' },
        { number: '10', label: 'Especialistas' },
    ];

    return (
        <section id="nosotros" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/clinic-interior.png"
                                alt="Interior moderno del consultorio dental"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating element */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-xl flex items-center justify-center">
                                    <span className="text-white text-2xl">🎓</span>
                                </div>
                                <div>
                                    <div className="font-bold text-[#111827] text-lg">Certificados</div>
                                    <div className="text-sm text-[#4B5563]">Internacionales</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <span className="inline-block text-[#2563EB] font-semibold text-sm uppercase tracking-wider">
                            Sobre Nosotros
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] font-['Outfit']">
                            Cuidando sonrisas desde 2009
                        </h2>
                        <p className="text-[#4B5563] text-lg leading-relaxed">
                            Fundado con la misión de brindar atención dental de excelencia, nuestro
                            consultorio ha sido un referente en la comunidad. Combinamos tecnología
                            de última generación con un trato humano y personalizado.
                        </p>
                        <p className="text-[#4B5563] text-lg leading-relaxed">
                            Nuestro equipo de especialistas está comprometido con tu bienestar,
                            ofreciendo soluciones integrales para toda la familia en un ambiente
                            cálido y profesional.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#2563EB] font-['Outfit']">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-[#4B5563] mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
