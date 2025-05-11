
interface SkillsSectionProps {
  title: string;
  skills: string[];
}

const SkillsSection = ({ title, skills }: SkillsSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-portfolio-blue px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
