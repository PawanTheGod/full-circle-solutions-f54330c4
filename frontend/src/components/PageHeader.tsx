import ScrollAnimation from "./ScrollAnimation";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  category?: string; // Optional field for that "luxury label" look
}

const PageHeader = ({ title, subtitle, category = "Expertise" }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-white">
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <ScrollAnimation>
          {/* Top Label */}
          <div className="flex justify-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
              {category}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-900 leading-[0.9] mb-8">
            {title}<span className="text-primary">.</span>
          </h1>

          {/* Subtitle with better line-height and color */}
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Minimalist Bottom Decorator */}
          <div className="mt-12 flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PageHeader;