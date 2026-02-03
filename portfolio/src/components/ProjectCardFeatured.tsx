'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

interface ProjectCardFeaturedProps {
    title: { es: string; en: string };
    description: { es: string; en: string };
    heroImage: string;
    gallery: string[];
    language: 'es' | 'en';
}

export default function ProjectCardFeatured({
    title,
    description,
    heroImage,
    gallery,
    language,
}: ProjectCardFeaturedProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsFlipped(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setIsFlipped(false);
        }, 600);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* 3D Flip Card Container */}
            <motion.div
                className="relative aspect-[4/3] cursor-pointer group"
                style={{ perspective: '1000px' }}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* Animated Glow Border */}
                <motion.div
                    className="absolute -inset-[2px] rounded-2xl z-0"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent), var(--primary))',
                        backgroundSize: '300% 300%',
                    }}
                    animate={{
                        backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                        opacity: isHovered ? 1 : 0.5,
                    }}
                    transition={{
                        backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
                        opacity: { duration: 0.3 }
                    }}
                />

                {/* Main Card Content */}
                <motion.div
                    className="relative w-full h-full z-10"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    {/* Front Face */}
                    <div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Hero Image */}
                        <Image
                            src={heroImage}
                            alt={title[language]}
                            fill
                            className="object-cover transition-all duration-500"
                            style={{
                                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                            }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Always Visible Dark Gradient */}
                        <div
                            className="absolute inset-0 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
                            }}
                        />

                        {/* Hover Gradient Overlay */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(14, 165, 233, 0.2) 100%)',
                            }}
                        />

                        {/* Project Title & Description (Always visible) */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <motion.h3
                                className="text-xl font-bold mb-2"
                                style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                                animate={{ y: isHovered ? -5 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {title[language]}
                            </motion.h3>
                            <motion.p
                                className="text-sm line-clamp-2"
                                style={{ color: 'rgba(255,255,255,0.8)' }}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    height: isHovered ? 'auto' : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {description[language]}
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    y: isHovered ? 0 : 10,
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="mt-3"
                            >
                                <span
                                    className="text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-200 hover:gap-3"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                                    }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    {language === 'es' ? 'Ver proyecto' : 'View project'}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </motion.div>
                        </div>

                        {/* Featured Badge with Animation */}
                        <motion.div
                            className="absolute top-4 left-4"
                            animate={{
                                scale: isHovered ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <span
                                className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5"
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                    color: 'white',
                                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                                }}
                            >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {language === 'es' ? 'Destacado' : 'Featured'}
                            </span>
                        </motion.div>

                        {/* Decorative Corner Elements */}
                        <motion.div
                            className="absolute top-4 right-4 w-8 h-8"
                            animate={{ rotate: isHovered ? 90 : 0, scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div
                                className="w-full h-full rounded-full flex items-center justify-center"
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Back Face */}
                    <div
                        className="absolute inset-0 rounded-xl overflow-hidden flex items-center justify-center"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-center text-white"
                        >
                            <div className="relative">
                                <svg className="w-16 h-16 mx-auto mb-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 border-2 border-white/30 rounded-full animate-ping" />
                                </div>
                            </div>
                            <span className="font-medium text-lg">{language === 'es' ? 'Cargando...' : 'Loading...'}</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                    className="absolute -inset-4 rounded-2xl pointer-events-none z-0"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                    }}
                />
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <ProjectModal
                        title={title}
                        description={description}
                        heroImage={heroImage}
                        gallery={gallery}
                        language={language}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
