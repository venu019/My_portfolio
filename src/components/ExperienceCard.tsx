
interface ExperienceCardProps {
  title: string;
  company: string;
  timeline: string;
  description: string;
}

const ExperienceCard = ({
  title,
  company,
  timeline,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="border-l-4 border-portfolio-blue pl-6 py-4 mb-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-500">{timeline}</p>
      <p className="text-lg mt-1">{company}</p>
      <p className="mt-2 text-portfolio-text-gray">{description}</p>
    </div>
  );
};

export default ExperienceCard;
