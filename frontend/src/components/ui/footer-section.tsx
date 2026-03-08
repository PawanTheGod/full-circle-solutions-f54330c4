import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSectionType {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSectionType[] = [
    {
        label: 'Quick Links',
        links: [
            { title: 'Services', href: '/services' },
            { title: 'Plans', href: '/plans' },
            { title: 'Portfolio', href: '/portfolio' },
            { title: 'About Us', href: '/about' },
        ],
    },
    {
        label: 'Contact',
        links: [
            { title: 'hello@360marketing.in', href: 'mailto:hello@360marketing.in', icon: Mail },
            { title: '+91 98765 43210', href: 'tel:+919876543210', icon: Phone },
            { title: 'Mumbai, Maharashtra, India', href: '#', icon: MapPin },
        ],
    },
    {
        label: 'Social',
        links: [
            { title: 'LinkedIn', href: '#', icon: Linkedin },
            { title: 'Instagram', href: '#', icon: Instagram },
            { title: 'Twitter', href: '#', icon: Twitter },
            { title: 'Facebook', href: '#', icon: Facebook },
        ],
    },
];

export function FooterSection() {
    return (
        <footer className="md:rounded-t-4xl relative w-full max-w-7xl mx-auto flex flex-col items-start justify-center rounded-t-2xl border-t border-border/40 bg-[radial-gradient(35%_128px_at_50%_0%,hsl(var(--secondary)/0.15),transparent)] px-6 py-12 lg:py-16 mt-20">
            <div className="bg-secondary/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-4">
                    <h3 className="font-display text-2xl font-bold mb-4">
                        360<span className="text-secondary">Marketing</span>
                    </h3>
                    <p className="text-muted-foreground mt-8 text-sm md:mt-0 leading-relaxed max-w-sm">
                        Complete digital & offline growth solutions for businesses of all sizes. Data-driven marketing that delivers results.
                    </p>
                    <p className="text-muted-foreground pt-4 text-xs md:mt-0">
                        © {new Date().getFullYear()} 360 Marketing. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">{section.label}</h3>
                                <ul className="text-muted-foreground space-y-3 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="hover:text-secondary inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && <link.icon className="me-2 size-4" />}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
