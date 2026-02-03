'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        icon: string;
        image?: string;
        title: string;
        subtitle: string;
        description: string;
        benefits: string[];
        process: { step: number; title: string; description: string }[];
        price: string;
        duration: string;
        color: string;
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen || !service) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

            {/* Modal */}
            <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-card-flip"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
                >
                    <svg className="w-5 h-5 text-[#4B5563] group-hover:text-[#111827] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div
                    className="p-8 lg:p-12"
                    style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)` }}
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="animate-card-flip-left flip-delay-1 flex justify-center lg:justify-start">
                            {service.image ? (
                                <div className="relative w-48 h-48 lg:w-64 lg:h-64 drop-shadow-2xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="text-[80px] lg:text-[120px] mb-4">{service.icon}</div>
                            )}
                        </div>
                        <div className="animate-fade-in-up flip-delay-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] font-['Outfit'] mb-2">
                                {service.title}
                            </h2>
                            <p className="text-lg text-[#4B5563] mb-4">{service.subtitle}</p>
                            <p className="text-[#4B5563] leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
                                    <span className="text-[#9CA3AF]">Precio:</span>
                                    <span className="font-semibold text-[#111827] ml-2">{service.price}</span>
                                </div>
                                <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
                                    <span className="text-[#9CA3AF]">Duración:</span>
                                    <span className="font-semibold text-[#111827] ml-2">{service.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="p-8 lg:px-12 bg-[#F9FAFB]">
                    <h3 className="text-xl font-bold text-[#111827] font-['Outfit'] mb-6">
                        Beneficios del tratamiento
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`animate-card-flip-bottom flip-delay-${Math.min(index + 1, 6)} bg-white rounded-xl p-4 hover:shadow-md transition-shadow`}
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${service.color}20` }}
                                    >
                                        <svg className="w-4 h-4" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#4B5563] text-sm font-medium">{benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process */}
                <div className="p-8 lg:px-12">
                    <h3 className="text-xl font-bold text-[#111827] font-['Outfit'] mb-6">
                        Proceso del tratamiento
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {service.process.map((step, index) => (
                            <div
                                key={step.step}
                                className={`animate-card-flip flip-delay-${index + 1} bg-[#F9FAFB] rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1`}
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3"
                                    style={{ backgroundColor: service.color }}
                                >
                                    {step.step}
                                </div>
                                <h4 className="font-semibold text-[#111827] mb-1">{step.title}</h4>
                                <p className="text-[#4B5563] text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-8 lg:px-12 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-white font-['Outfit']">
                                ¿Listo para empezar?
                            </h3>
                            <p className="text-white/80 text-sm">
                                Agenda tu cita hoy y da el primer paso hacia una sonrisa perfecta.
                            </p>
                        </div>
                        <Link
                            href="#cita"
                            onClick={onClose}
                            className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all whitespace-nowrap"
                        >
                            Agendar mi cita
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
