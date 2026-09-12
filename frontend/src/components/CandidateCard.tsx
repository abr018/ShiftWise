interface CandidateCardProps {
  name: string;
  email: string;
  title: string;
  location: string;
  skills: string | string[];
  experienceYears: number;
}

function CandidateCard({
  name,
  email,
  title,
  location,
  skills,
  experienceYears,
}: CandidateCardProps) {
  const skillsList =
    typeof skills === "string"
      ? skills.split(",").map((skill) => skill.trim())
      : skills;

  return (
    <div className="candidate-card">
      <h3>{name}</h3>

      <p>{email}</p>

      <p>
        <strong>Role:</strong> {title}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <div className="skills">
        {skillsList.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <p>Experience: {experienceYears} year(s)</p>
    </div>
  );
}

export default CandidateCard;