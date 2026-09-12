import CandidateCard from "../components/CandidateCard";
import { getRecruiters } from "../services/api";
import { useEffect, useState } from "react";

interface Recruiter {
  id: number;
  companyName: string;
  position: string;
  user: {
    name: string;
    email: string;
  };
}

function Recruiters() {
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

  useEffect(() => {
    async function loadRecruiters() {
      const data = await getRecruiters();
      setRecruiters(data);
    }

    loadRecruiters();
  }, []);

  return (
    <div className="dashboard">
      <h1>Recruiters</h1>

      <div className="candidate-list">
        {recruiters.map((recruiter) => (
          <CandidateCard
            key={recruiter.id}
            name={recruiter.user.name}
            email={recruiter.user.email}
            title={recruiter.position}
            location={recruiter.companyName}
            skills={["Recruitment"]}
            experienceYears={0}
          />
        ))}
      </div>
    </div>
  );
}

export default Recruiters;