import CandidateCard from "../components/CandidateCard";
import { getCandidates } from "../services/api";
import { useEffect, useState } from "react";

interface Candidate {
  id: number;
  name: string;
  email: string;
  skills: string[];
  experienceYears: number;
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
            name={candidate.name}
            email={candidate.email}
            skills={candidate.skills}
            experienceYears={candidate.experienceYears}
          />
        ))}
      </div>
    </div>
  );
}

export default Candidates;