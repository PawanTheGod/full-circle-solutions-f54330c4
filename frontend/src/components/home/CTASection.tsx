import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

const CTASection = () => {
    return (
        <section className="py-20 bg-secondary text-secondary-foreground">
            <div className="container mx-auto container-padding text-center">
                <ScrollAnimation>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
                    <p className="text-secondary-foreground/80 mb-8 max-w-lg mx-auto">Let's discuss how we can help you achieve your goals with data-driven marketing.</p>
                    <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
                        <Link to="/contact">Get In Touch</Link>
                    </Button>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default CTASection;
