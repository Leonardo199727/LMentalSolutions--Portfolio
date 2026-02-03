'use client';

const benefits = [
    {
        icon: '⏰',
        title: 'Horarios flexibles',
        description: 'Atendemos fines de semana y horarios extendidos',
    },
    {
        icon: '🛡️',
        title: 'Garantía total',
        description: 'Respaldamos todos nuestros tratamientos',
    },
    {
        icon: '💳',
        title: 'Planes de pago',
        description: 'Facilidades sin intereses hasta 12 meses',
    },
    {
        icon: '🏆',
        title: 'Tecnología avanzada',
        description: 'Equipos de última generación',
    },
    {
        icon: '😊',
        title: 'Ambiente cálido',
        description: 'Consultorios diseñados para tu comodidad',
    },
    {
        icon: '🎯',
        title: 'Atención personalizada',
        description: 'Tratamientos a la medida de tus necesidades',
    },
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-white/80 font-semibold text-sm uppercase tracking-wider mb-4">
                        Beneficios
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Outfit'] mb-4">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="text-white/80 text-lg">
                        Descubre lo que nos hace diferentes y por qué miles de pacientes confían en nosotros.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">{benefit.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1 font-['Outfit']">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
