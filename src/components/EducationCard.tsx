
interface EducationCardProps {
  school: string;
  degree: string;
  timeline: string;
  location?: string;
  gpa?: string;
}

const EducationCard = ({
  school,
  degree,
  timeline,
  location,
  gpa,
}: EducationCardProps) => {
  return (
    <div className="border-l-4 border-portfolio-blue pl-6 py-4 mb-8">
      <h3 className="text-2xl font-semibold">{school}</h3>
      <p className="text-gray-500">{timeline}</p>
      <p className="text-lg mt-1">{degree}</p>
      {location && <p className="text-gray-500">{location}</p>}
      {gpa && <p className="mt-1">GPA: {gpa}</p>}
    </div>
  );
};

export default EducationCard;
