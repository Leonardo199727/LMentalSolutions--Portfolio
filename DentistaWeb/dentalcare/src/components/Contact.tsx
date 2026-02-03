'use client';

const contactInfo = [
    {
        icon: '📞',
        label: 'Teléfono',
        value: '+52 55 1234 5678',
        href: 'tel:+525512345678',
    },
    {
        icon: '💬',
        label: 'WhatsApp',
        value: '+52 55 8765 4321',
        href: 'https://wa.me/5558765432',
    },
    {
        icon: '✉️',
        label: 'Correo',
        value: 'citas@dentalcare.mx',
        href: 'mailto:citas@dentalcare.mx',
    },
    {
        icon: '🕐',
        label: 'Horarios',
        value: 'Lun-Vie: 9am-7pm | Sáb: 9am-2pm',
        href: null,
    },
];

export default function Contact() {
    return (
        <section id="contacto" className="py-20 lg:py-28 bg-[#111827]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-4">
                                Contacto
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Outfit'] mb-4">
                                ¿Tienes preguntas?
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Estamos aquí para ayudarte. Contáctanos por el medio que prefieras.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex items-start gap-4 group">
                                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB] transition-colors duration-300">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-lg font-medium text-white hover:text-[#2563EB] transition-colors duration-200"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div className="text-lg font-medium text-white">{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {['Facebook', 'Instagram', 'TikTok'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-[#2563EB] transition-all duration-300 hover:scale-110"
                                >
                                    <span className="text-xl">
                                        {social === 'Facebook' && '📘'}
                                        {social === 'Instagram' && '📸'}
                                        {social === 'TikTok' && '🎵'}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="relative">
                        <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.542284992484!2d-99.17700542475631!3d19.38883628188339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3980d4c921%3A0xe54b9e76150536c0!2sAv.%20Insurgentes%20Sur%201234%2C%20Tlacoquemecatl%20del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003200%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1708456644080!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Address Badge */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0 animate-bounce">
                                        <span className="text-white text-lg">📍</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-[#111827] text-sm">Av. Insurgentes Sur 1234</div>
                                        <div className="text-xs text-[#4B5563]">Del Valle Centro, CDMX</div>
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
