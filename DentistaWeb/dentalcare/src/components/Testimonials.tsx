'use client';

const testimonials = [
    {
        quote: 'El mejor dentista que he visitado. Atención de primera y resultados increíbles. Mi sonrisa cambió completamente.',
        name: 'María García',
        role: 'Paciente desde 2020',
        rating: 5,
    },
    {
        quote: 'Excelente atención y profesionalismo. El tratamiento de ortodoncia superó mis expectativas. Muy recomendado.',
        name: 'Carlos Rodríguez',
        role: 'Tratamiento de ortodoncia',
        rating: 5,
    },
    {
        quote: 'Profesionales y muy amables. Me sentí en confianza desde la primera visita. El blanqueamiento quedó perfecto.',
        name: 'Ana López',
        role: 'Blanqueamiento dental',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonios" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-4">
                        Testimonios
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] font-['Outfit'] mb-4">
                        Lo que dicen nuestros pacientes
                    </h2>
                    <p className="text-[#4B5563] text-lg">
                        Historias reales de sonrisas transformadas y pacientes satisfechos.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="group bg-[#F9FAFB] rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-[#4B5563] text-lg leading-relaxed mb-6 italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-full flex items-center justify-center text-white font-semibold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-[#111827]">{testimonial.name}</div>
                                    <div className="text-sm text-[#4B5563]">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
