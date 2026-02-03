'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const serviceData: Record<string, {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: { step: number; title: string; description: string }[];
    price: string;
    duration: string;
    color: string;
}> = {
    limpieza: {
        icon: '🦷',
        title: 'Limpieza Dental',
        subtitle: 'Higiene dental profesional',
        description: 'La limpieza dental profesional es fundamental para mantener una sonrisa saludable. Nuestro equipo utiliza técnicas avanzadas y equipos de última generación para eliminar la placa y el sarro acumulado.',
        benefits: [
            'Eliminación completa de placa y sarro',
            'Prevención de caries y enfermedades de encías',
            'Blanqueamiento natural de los dientes',
            'Aliento fresco y duradero',
            'Detección temprana de problemas dentales',
        ],
        process: [
            { step: 1, title: 'Evaluación inicial', description: 'Examinamos tu salud bucal actual' },
            { step: 2, title: 'Limpieza profunda', description: 'Removemos placa y sarro con ultrasonido' },
            { step: 3, title: 'Pulido dental', description: 'Pulimos tus dientes para un acabado brillante' },
            { step: 4, title: 'Fluorización', description: 'Aplicamos flúor para fortalecer el esmalte' },
        ],
        price: 'Desde $800 MXN',
        duration: '45-60 minutos',
        color: '#10B981',
    },
    ortodoncia: {
        icon: '📐',
        title: 'Ortodoncia',
        subtitle: 'Alineación dental perfecta',
        description: 'Corregimos la posición de tus dientes con las técnicas más modernas. Ofrecemos brackets tradicionales, estéticos y alineadores invisibles para adaptarnos a tu estilo de vida.',
        benefits: [
            'Sonrisa perfectamente alineada',
            'Mejor mordida y masticación',
            'Facilita la limpieza dental',
            'Mejora la estética facial',
            'Previene desgaste irregular de dientes',
        ],
        process: [
            { step: 1, title: 'Diagnóstico', description: 'Radiografías y modelos de estudio' },
            { step: 2, title: 'Plan de tratamiento', description: 'Diseñamos tu plan personalizado' },
            { step: 3, title: 'Colocación', description: 'Instalamos brackets o alineadores' },
            { step: 4, title: 'Seguimiento', description: 'Ajustes periódicos cada 4-6 semanas' },
        ],
        price: 'Desde $25,000 MXN',
        duration: '12-24 meses',
        color: '#8B5CF6',
    },
    blanqueamiento: {
        icon: '✨',
        title: 'Blanqueamiento',
        subtitle: 'Sonrisa radiante',
        description: 'Recupera el blanco natural de tus dientes con nuestros tratamientos de blanqueamiento profesional. Resultados visibles desde la primera sesión con tecnología LED de última generación.',
        benefits: [
            'Dientes hasta 8 tonos más blancos',
            'Resultados inmediatos y duraderos',
            'Tratamiento seguro y sin dolor',
            'Tecnología LED de última generación',
            'Productos de grado profesional',
        ],
        process: [
            { step: 1, title: 'Limpieza previa', description: 'Preparamos tus dientes' },
            { step: 2, title: 'Protección', description: 'Protegemos encías y tejidos' },
            { step: 3, title: 'Aplicación', description: 'Gel blanqueador + luz LED' },
            { step: 4, title: 'Cuidados', description: 'Instrucciones post-tratamiento' },
        ],
        price: 'Desde $3,500 MXN',
        duration: '60-90 minutos',
        color: '#F59E0B',
    },
    implantes: {
        icon: '🔩',
        title: 'Implantes',
        subtitle: 'Reemplazo permanente',
        description: 'Recupera la funcionalidad y estética de tu sonrisa con implantes de titanio de alta calidad. Solución permanente que se integra naturalmente con tu hueso maxilar.',
        benefits: [
            'Solución permanente y duradera',
            'Aspecto y función de diente natural',
            'Preserva el hueso maxilar',
            'No afecta dientes adyacentes',
            'Garantía de por vida en el implante',
        ],
        process: [
            { step: 1, title: 'Evaluación', description: 'TAC y planificación 3D' },
            { step: 2, title: 'Cirugía', description: 'Colocación del implante de titanio' },
            { step: 3, title: 'Integración', description: 'Período de osteointegración' },
            { step: 4, title: 'Corona', description: 'Colocación de corona definitiva' },
        ],
        price: 'Desde $18,000 MXN',
        duration: '3-6 meses',
        color: '#EF4444',
    },
};

export default function ServicePage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = serviceData[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#111827]">Servicio no encontrado</h1>
                    <p className="text-[#4B5563] mt-2">Slug: {slug || 'undefined'}</p>
                    <Link href="/" className="text-[#2563EB] mt-4 inline-block hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <main>
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-white via-[#F9FAFB] to-[#EBF4FF]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-card-flip flip-delay-1">
                            <div className="inline-flex items-center gap-2 text-sm font-medium mb-4">
                                <Link href="/" className="text-[#4B5563] hover:text-[#2563EB]">Inicio</Link>
                                <span className="text-[#9CA3AF]">/</span>
                                <Link href="/#servicios" className="text-[#4B5563] hover:text-[#2563EB]">Servicios</Link>
                                <span className="text-[#9CA3AF]">/</span>
                                <span className="text-[#2563EB]">{service.title}</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] font-['Outfit'] mb-4">
                                {service.title}
                            </h1>
                            <p className="text-xl text-[#4B5563] mb-6">{service.subtitle}</p>
                            <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/#cita"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                >
                                    Agendar cita
                                </Link>
                                <div className="flex items-center gap-6 text-sm">
                                    <div>
                                        <span className="text-[#9CA3AF]">Precio:</span>
                                        <span className="font-semibold text-[#111827] ml-2">{service.price}</span>
                                    </div>
                                    <div>
                                        <span className="text-[#9CA3AF]">Duración:</span>
                                        <span className="font-semibold text-[#111827] ml-2">{service.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="animate-card-flip-left flip-delay-2">
                            <div
                                className="aspect-square rounded-3xl flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)` }}
                            >
                                <span className="text-[150px]">{service.icon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <h2 className="text-3xl font-bold text-[#111827] font-['Outfit'] text-center mb-12">
                        Beneficios del tratamiento
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`animate-card-flip-bottom flip-delay-${Math.min(index + 1, 6)} bg-[#F9FAFB] rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${service.color}20` }}
                                    >
                                        <svg className="w-5 h-5" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#4B5563] font-medium">{benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <h2 className="text-3xl font-bold text-[#111827] font-['Outfit'] text-center mb-12">
                        Proceso del tratamiento
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((step, index) => (
                            <div
                                key={step.step}
                                className={`animate-card-flip flip-delay-${index + 1} bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2`}
                            >
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4"
                                    style={{ backgroundColor: service.color }}
                                >
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-[#111827] mb-2">{step.title}</h3>
                                <p className="text-[#4B5563] text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]">
                <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Outfit'] mb-4">
                        ¿Listo para empezar?
                    </h2>
                    <p className="text-white/80 text-lg mb-8">
                        Agenda tu cita hoy y da el primer paso hacia una sonrisa perfecta.
                    </p>
                    <Link
                        href="/#cita"
                        className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
                    >
                        Agendar mi cita ahora
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
