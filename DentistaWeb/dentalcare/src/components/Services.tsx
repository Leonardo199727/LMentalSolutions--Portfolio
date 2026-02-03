'use client';

import { useState } from 'react';
import ServiceModal from './ServiceModal';

import Image from 'next/image';

const services = [
    {
        icon: '🦷',
        image: '/services/limpieza.png',
        title: 'Limpieza Dental',
        subtitle: 'Higiene dental profesional',
        description: 'La limpieza dental profesional es fundamental para mantener una sonrisa saludable. Nuestro equipo utiliza técnicas avanzadas y equipos de última generación para eliminar la placa y el sarro acumulado.',
        shortDescription: 'Eliminación profesional de placa y sarro para mantener una sonrisa saludable y prevenir enfermedades.',
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
    {
        icon: '📐',
        image: '/services/ortodoncia.png',
        title: 'Ortodoncia',
        subtitle: 'Alineación dental perfecta',
        description: 'Corregimos la posición de tus dientes con las técnicas más modernas. Ofrecemos brackets tradicionales, estéticos y alineadores invisibles para adaptarnos a tu estilo de vida.',
        shortDescription: 'Brackets tradicionales y alineadores invisibles para corregir la posición de tus dientes.',
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
    {
        icon: '✨',
        image: '/services/blanqueamiento.png',
        title: 'Blanqueamiento',
        subtitle: 'Sonrisa radiante',
        description: 'Recupera el blanco natural de tus dientes con nuestros tratamientos de blanqueamiento profesional. Resultados visibles desde la primera sesión con tecnología LED de última generación.',
        shortDescription: 'Tratamientos seguros y efectivos para lograr una sonrisa más blanca y brillante.',
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
    {
        icon: '🔩',
        image: '/services/implantes.png',
        title: 'Implantes',
        subtitle: 'Reemplazo permanente',
        description: 'Recupera la funcionalidad y estética de tu sonrisa con implantes de titanio de alta calidad. Solución permanente que se integra naturalmente con tu hueso maxilar.',
        shortDescription: 'Soluciones permanentes y de alta calidad para reemplazar dientes perdidos.',
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
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service: typeof services[0]) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300);
    };

    return (
        <>
            <section id="servicios" className="py-20 lg:py-28 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-4">
                            Nuestros Servicios
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] font-['Outfit'] mb-4">
                            Tratamientos dentales de calidad
                        </h2>
                        <p className="text-[#4B5563] text-lg">
                            Ofrecemos una amplia gama de servicios para cuidar tu sonrisa con la mejor tecnología y profesionalismo.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <button
                                key={service.title}
                                onClick={() => openModal(service)}
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left w-full"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                    {service.image ? (
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</span>
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-[#111827] mb-3 font-['Outfit'] group-hover:text-[#2563EB] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#4B5563] text-sm leading-relaxed">
                                    {service.shortDescription}
                                </p>

                                {/* Arrow */}
                                <div className="mt-6 flex items-center text-[#2563EB] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Ver más</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ServiceModal
                isOpen={isModalOpen}
                onClose={closeModal}
                service={selectedService}
            />
        </>
    );
}
