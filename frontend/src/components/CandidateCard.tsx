interface CandidateCardProps {
  name: string;
  email: string;
  skills: string[];
  experienceYears: number;
}

function CandidateCard({
  name,
  email,
  skills,
  experienceYears,
}: CandidateCardProps) {
  return (
    <div className="candidate-card">
      <h3>{name}</h3>
      <p>{email}</p>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

     <p>Experience: {experienceYears} year(s)</p>
    </div>
  );
}

export default CandidateCard;