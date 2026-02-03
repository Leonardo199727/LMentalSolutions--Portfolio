'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectModalProps {
    title: { es: string; en: string };
    description: { es: string; en: string };
    heroImage: string;
    gallery: string[];
    language: 'es' | 'en';
    onClose: () => void;
}

export default function ProjectModal({
    title,
    description,
    heroImage,
    gallery,
    language,
    onClose,
}: ProjectModalProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Ensure we're client-side for portal
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle ESC key and body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    // Track scroll position for progress indicator
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const sectionHeight = container.clientHeight;
            const newSection = Math.round(scrollTop / sectionHeight);
            setCurrentSection(newSection);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const allImages = [heroImage, ...gallery];

    // Gallery section descriptions with title and detailed description
    const sectionDescriptions = [
        {
            title: { es: 'Sección de Servicios', en: 'Services Section' },
            desc: {
                es: 'Presentación clara y organizada de los servicios ofrecidos, con iconografía distintiva y descripciones concisas que facilitan la comprensión del valor proporcionado.',
                en: 'Clear and organized presentation of offered services, with distinctive iconography and concise descriptions that facilitate understanding of the value provided.'
            }
        },
        {
            title: { es: 'Descripción de Servicios Especializados', en: 'Specialized Services Description' },
            desc: {
                es: 'Información detallada sobre las soluciones técnicas y metodologías aplicadas, resaltando el valor diferencial y la especialización en el sector.',
                en: 'Detailed information about the technical solutions and methodologies applied, highlighting the differential value and specialization in the sector.'
            }
        },
        {
            title: { es: 'Sobre Nosotros', en: 'About Us' },
            desc: {
                es: 'Sección que presenta la identidad de la marca, su misión y el equipo humano, fortaleciendo la confianza y el vínculo emocional con el cliente.',
                en: 'Section presenting the brand identity, mission, and the human team, strengthening trust and the emotional bond with the client.'
            }
        },
        {
            title: { es: 'Identificadores', en: 'Identifiers' },
            desc: {
                es: 'Uso de elementos visuales y logotipos que refuerzan la identidad de marca y aseguran la coherencia visual en toda la plataforma.',
                en: 'Use of visual elements and logos that reinforce brand identity and ensure visual consistency throughout the platform.'
            }
        },
        {
            title: { es: 'Formularios Atractivos y Eficientes', en: 'Attractive and Efficient Forms' },
            desc: {
                es: 'Diseño de formularios intuitivos y visualmente atractivos que mejoran la experiencia del usuario y optimizan la recolección de datos.',
                en: 'Intuitive and visually appealing form design that improves user experience and optimizes data collection.'
            }
        },
        {
            title: { es: 'Opiniones reales de nuestros clientes', en: 'Real customer reviews' },
            desc: {
                es: 'Sección de testimonios que construye credibilidad y confianza a través de las experiencias positivas de clientes satisfechos.',
                en: 'Testimonials section that builds credibility and trust through the positive experiences of satisfied customers.'
            }
        },
        {
            title: { es: 'Tarjetas de Contacto Atractivas', en: 'Attractive Contact Cards' },
            desc: {
                es: 'Diseño de tarjetas de contacto visualmente impactantes que presentan la información de manera clara, facilitando la conexión inmediata con los clientes.',
                en: 'Visually impactful contact card design that presents information clearly, facilitating immediate connection with clients.'
            }
        },
        {
            title: { es: 'Sección CTA', en: 'CTA Section' },
            desc: {
                es: 'Componente de cierre enfocado en motivar la acción del usuario, utilizando diseño visual atractivo y microinteracciones para reforzar confianza y reducir fricción en el proceso de contacto.',
                en: 'Closing component focused on motivating user action, using attractive visual design and micro-interactions to reinforce trust and reduce friction in the contact process.'
            }
        },
    ];

    // Don't render until mounted (client-side)
    if (!mounted) return null;

    const modalContent = (
        <motion.div
            className="fixed inset-0 z-[9999]"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Solid Opaque Backdrop */}
            <div
                className="absolute inset-0"
                style={{ background: '#0a0a0f' }}
                onClick={onClose}
            />

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-[10000] p-3 rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/20"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Close modal"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Progress Indicator */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-[10000] hidden lg:flex flex-col gap-3">
                {allImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            scrollContainerRef.current?.scrollTo({
                                top: index * (scrollContainerRef.current?.clientHeight || 0),
                                behavior: 'smooth',
                            });
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index ? 'scale-125' : 'hover:scale-110'
                            }`}
                        style={{
                            background: currentSection === index
                                ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
                                : 'rgba(255, 255, 255, 0.3)',
                        }}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
                {/* End CTA indicator */}
                <button
                    onClick={() => {
                        scrollContainerRef.current?.scrollTo({
                            top: allImages.length * (scrollContainerRef.current?.clientHeight || 0),
                            behavior: 'smooth',
                        });
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === allImages.length ? 'scale-125' : 'hover:scale-110'
                        }`}
                    style={{
                        background: currentSection === allImages.length
                            ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
                            : 'rgba(255, 255, 255, 0.3)',
                    }}
                    aria-label="Go to contact section"
                />
            </div>

            {/* Scrollable Content with Solid Background */}
            <div
                ref={scrollContainerRef}
                className="absolute inset-0 overflow-y-auto snap-y snap-mandatory"
                style={{ background: '#0a0a0f' }}
            >
                {/* Hero Section */}
                <section className="relative h-screen snap-start flex items-center justify-center overflow-hidden">
                    {/* Background Image - Full Opacity */}
                    <div className="absolute inset-0">
                        <Image
                            src={heroImage}
                            alt={title[language]}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        {/* Dark overlay for text readability */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.85) 100%)',
                            }}
                        />
                    </div>

                    {/* Hero Content */}
                    <motion.div
                        className="relative z-10 text-center max-w-4xl mx-auto px-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.span
                            className="inline-block text-sm font-medium px-4 py-2 rounded-full mb-6"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                color: 'white',
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {language === 'es' ? 'Caso de Éxito' : 'Success Story'}
                        </motion.span>

                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                            style={{ color: 'white' }}
                        >
                            {title[language]}
                        </h1>

                        <p
                            className="text-lg md:text-xl mb-8 inline-block"
                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                            {description[language]}
                        </p>

                        <motion.div
                            className="flex items-center justify-center gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span
                                className="text-sm flex items-center gap-2"
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                {language === 'es' ? 'Desliza para explorar' : 'Scroll to explore'}
                            </span>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Gallery Sections */}
                {gallery.map((image, index) => (
                    <section
                        key={index}
                        className="relative min-h-screen snap-start flex items-center justify-center py-20 px-6"
                        style={{ background: '#0a0a0f' }}
                    >
                        <div
                            className={`max-w-6xl w-full flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center gap-12`}
                        >
                            {/* Image Container */}
                            <motion.div
                                className="relative w-full lg:w-2/3 aspect-video rounded-xl overflow-hidden shadow-2xl"
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <Image
                                    src={image}
                                    alt={sectionDescriptions[index]?.title[language] || `Section ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                />
                                {/* Subtle gradient overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%)',
                                    }}
                                />
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                className="w-full lg:w-1/3 text-center lg:text-left"
                                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                            >
                                <span
                                    className="text-sm font-medium mb-3 block"
                                    style={{ color: 'var(--primary-light)' }}
                                >
                                    {String(index + 2).padStart(2, '0')}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'white' }}>
                                    {sectionDescriptions[index]?.title[language] || `${language === 'es' ? 'Sección' : 'Section'} ${index + 2}`}
                                </h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>
                                    {sectionDescriptions[index]?.desc[language] || (language === 'es'
                                        ? 'Diseño cuidadosamente pensado para maximizar la experiencia del usuario y la conversión.'
                                        : 'Carefully designed to maximize user experience and conversion.')}
                                </p>
                            </motion.div>
                        </div>
                    </section>
                ))}

                {/* End CTA Section */}
                <section
                    className="h-screen snap-start flex items-center justify-center"
                    style={{ background: '#0a0a0f' }}
                >
                    <motion.div
                        className="text-center px-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'white' }}>
                            {language === 'es' ? '¿Te gustaría algo similar?' : 'Would you like something similar?'}
                        </h2>
                        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {language === 'es'
                                ? 'Agenda una sesión gratuita y hablemos de cómo puedo ayudarte.'
                                : "Schedule a free session and let's discuss how I can help you."}
                        </p>
                        <button
                            onClick={onClose}
                            className="btn btn-primary text-lg"
                        >
                            {language === 'es' ? 'Contáctame' : 'Contact me'}
                        </button>
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );

    // Use createPortal to render at document.body level
    // This escapes any parent stacking contexts
    return createPortal(modalContent, document.body);
}
