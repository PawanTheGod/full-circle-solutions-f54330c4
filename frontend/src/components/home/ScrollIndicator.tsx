import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-10 opacity-60">
            <ChevronDown className="h-8 w-8 text-foreground/50" />
        </div>
    );
};

export default ScrollIndicator;
