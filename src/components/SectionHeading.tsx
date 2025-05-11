
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-10">
      {subtitle && (
        <h3 className="text-xl text-portfolio-blue mb-2">{subtitle}</h3>
      )}
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeading;
