'use client';

import Link from 'next/link';

const footerLinks = {
    enlaces: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Testimonios', href: '#testimonios' },
        { label: 'Contacto', href: '#contacto' },
    ],
    servicios: [
        { label: 'Limpieza Dental', href: '#servicios' },
        { label: 'Ortodoncia', href: '#servicios' },
        { label: 'Blanqueamiento', href: '#servicios' },
        { label: 'Implantes', href: '#servicios' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-xl flex items-center justify-center">
                                <span className="text-white text-xl">🦷</span>
                            </div>
                            <span className="text-xl font-semibold font-['Outfit']">DentalCare</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Tu sonrisa, nuestra pasión. Más de 15 años cuidando de tu salud bucal con la mejor tecnología y profesionalismo.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {['📘', '📸', '🎵'].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors duration-300"
                                >
                                    <span>{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 font-['Outfit']">Enlaces</h4>
                        <ul className="space-y-3">
                            {footerLinks.enlaces.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 font-['Outfit']">Servicios</h4>
                        <ul className="space-y-3">
                            {footerLinks.servicios.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 font-['Outfit']">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span>📞</span>
                                <a href="tel:+525512345678" className="hover:text-white transition-colors">
                                    +52 55 1234 5678
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span>✉️</span>
                                <a href="mailto:citas@dentalcare.mx" className="hover:text-white transition-colors">
                                    citas@dentalcare.mx
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <span>📍</span>
                                <span>Av. Insurgentes Sur 1234, Col. Roma, CDMX</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>© 2026 DentalCare. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                            <a href="#" className="hover:text-white transition-colors">Términos</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
