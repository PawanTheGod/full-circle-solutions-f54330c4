import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-10">
            <ChevronDown className="h-6 w-6 text-primary-foreground/50" />
        </div>
    );
};

export default ScrollIndicator;
