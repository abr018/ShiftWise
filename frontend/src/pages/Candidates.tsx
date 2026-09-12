import CandidateCard from "../components/CandidateCard";
import { getCandidates } from "../services/api";
import { useEffect, useState } from "react";

interface Candidate {
  id: number;
  title: string;
  location: string;
  skills: string | string[];
  experienceYears: number;
  user: {
    name: string;
    email: string;
  };
}

function Candidates() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    async function loadCandidates() {
      const data = await getCandidates();
      setCandidates(data);
    }

    loadCandidates();
  }, []);

  return (
    <div className="dashboard">
      <h1>Candidates</h1>

      <div className="candidate-list">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            name={candidate.user.name}
            email={candidate.user.email}
            title={candidate.title}
            location={candidate.location}
            skills={candidate.skills}
            experienceYears={candidate.experienceYears}
          />
        ))}
      </div>
    </div>
  );
}

export default Candidates;