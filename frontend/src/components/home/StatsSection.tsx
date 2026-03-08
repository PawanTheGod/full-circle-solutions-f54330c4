import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Clock, Layers } from "lucide-react";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 1500;
                    const step = (timestamp: number) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        setCount(Math.floor(progress * target));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

const stats = [
    { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed" },
    { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
    { icon: Clock, value: 5, suffix: "+", label: "Years Experience" },
    { icon: Layers, value: 10, suffix: "+", label: "Services Offered" },
];

const StatsSection = () => {
    return (
        <section className="section-padding bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-primary/80 to-secondary/30 backdrop-blur-xl border border-secondary/30 ring-1 ring-white/10 rounded-[2.5rem] py-16 px-8 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                    {/* Background glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center group">
                                <div className="inline-flex h-16 w-16 rounded-full bg-secondary border-2 border-white/50 items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:bg-secondary/90 transition-all duration-500">
                                    <s.icon className="h-7 w-7 text-white drop-shadow-md" />
                                </div>
                                <div className="font-display text-5xl md:text-6xl font-extrabold mb-3 text-white tracking-tight drop-shadow-md">
                                    <Counter target={s.value} suffix={s.suffix} />
                                </div>
                                <p className="text-sm sm:text-base font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
