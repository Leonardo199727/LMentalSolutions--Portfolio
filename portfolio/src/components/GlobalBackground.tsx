'use client';

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--muted) 1px, transparent 1px),
                        linear-gradient(90deg, var(--muted) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />



            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 animate-pulse-glow"
                style={{ background: 'var(--primary-dark)' }}
            />

            <div
                className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-15 animate-pulse-glow"
                style={{ background: 'var(--secondary)', animationDelay: '2s' }}
            />

            <div
                className="absolute top-[40%] left-[-5%] w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-15 animate-pulse-glow"
                style={{ background: 'var(--accent)', animationDelay: '4s' }}
            />

            <div
                className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-20 animate-pulse-glow"
                style={{ background: 'var(--primary)', animationDelay: '6s' }}
            />

            <div
                className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-15 animate-pulse-glow"
                style={{ background: 'var(--secondary)', animationDelay: '8s' }}
            />
        </div>
    );
}
