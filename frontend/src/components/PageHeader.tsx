import ScrollAnimation from "./ScrollAnimation";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-primary text-primary-foreground section-padding pt-32 md:pt-40">
      <div className="container mx-auto container-padding text-center">
        <ScrollAnimation>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PageHeader;
