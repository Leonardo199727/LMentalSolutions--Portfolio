'use client';

import { useState } from 'react';

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        motivo: '',
        mensaje: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ nombre: '', telefono: '', email: '', motivo: '', mensaje: '' });
        }, 3000);
    };

    return (
        <section id="cita" className="py-20 lg:py-28 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-4">
                        Agenda tu cita
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] font-['Outfit'] mb-4">
                        ¿Listo para mejorar tu sonrisa?
                    </h2>
                    <p className="text-[#4B5563] text-lg">
                        Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                </div>

                {/* Form Card */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                        {isSubmitted ? (
                            <div className="text-center py-12 animate-scale-in">
                                <div className="w-20 h-20 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#111827] mb-2 font-['Outfit']">
                                    ¡Solicitud enviada!
                                </h3>
                                <p className="text-[#4B5563]">
                                    Te contactaremos pronto para confirmar tu cita.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Row 1: Nombre y Teléfono */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-[#4B5563] mb-2">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all duration-200"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telefono" className="block text-sm font-medium text-[#4B5563] mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all duration-200"
                                            placeholder="+52 55 1234 5678"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#4B5563] mb-2">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all duration-200"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                {/* Motivo */}
                                <div>
                                    <label htmlFor="motivo" className="block text-sm font-medium text-[#4B5563] mb-2">
                                        Motivo de consulta
                                    </label>
                                    <select
                                        id="motivo"
                                        name="motivo"
                                        value={formData.motivo}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all duration-200 cursor-pointer"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="limpieza">Limpieza dental</option>
                                        <option value="ortodoncia">Ortodoncia</option>
                                        <option value="blanqueamiento">Blanqueamiento</option>
                                        <option value="implantes">Implantes</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-[#4B5563] mb-2">
                                        Mensaje (opcional)
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all duration-200 resize-none"
                                        placeholder="Cuéntanos más sobre tu consulta..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white py-4 rounded-xl font-semibold text-base hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Enviar solicitud</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
