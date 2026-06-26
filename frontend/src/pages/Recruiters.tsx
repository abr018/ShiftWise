import CandidateCard from "../components/CandidateCard";

function Recruiters() {
  const recruiters = [
    {
      name: "Ana Silva",
      email: "ana@shiftwise.com",
      skills: ["React", "LinkedIn"],
      experienceYears: 5,
    },
    {
      name: "Pedro Costa",
      email: "pedro@shiftwise.com",
      skills: ["HR", "Tech Recruiting"],
      experienceYears: 8,
    },
  ];

  return (
    <>
     <>
  <h1>Recruiters</h1>

  <div className="candidate-list">
    {recruiters.map((recruiter, index) => (
      <CandidateCard
        key={index}
        name={recruiter.name}
        email={recruiter.email}
        skills={recruiter.skills}
        experienceYears={recruiter.experienceYears}
      />
    ))}
  </div>
</>
    </>
  );
}

export default Recruiters;