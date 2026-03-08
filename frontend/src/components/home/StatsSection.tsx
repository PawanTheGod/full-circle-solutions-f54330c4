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
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <s.icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                            <div className="font-display text-4xl md:text-5xl font-bold mb-1">
                                <Counter target={s.value} suffix={s.suffix} />
                            </div>
                            <p className="text-sm text-primary-foreground/60">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
