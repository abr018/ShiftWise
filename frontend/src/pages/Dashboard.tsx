import { useEffect, useState } from "react";
import "../styles/Dashboard.css";

import StatsCard from "../components/StatsCard";
import CandidateCard from "../components/CandidateCard";
import { getUsers, getCandidates, getRecruiters } from "../services/api";

interface Candidate {
  id: number;
  name: string;
  email: string;
  skills: string[];
  experienceYears: number;
}

function Dashboard({
  applicationsCount,
  savedJobsCount,
}: {
  applicationsCount: number;
  savedJobsCount: number;
}) {
  const [usersCount, setUsersCount] = useState(0);
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [recruitersCount, setRecruitersCount] = useState(0);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    async function loadData() {
      const users = await getUsers();
      const candidatesData = await getCandidates();
      const recruiters = await getRecruiters();

      setUsersCount(users.length);
      setCandidatesCount(candidatesData.length);
      setRecruitersCount(recruiters.length);
      setCandidates(candidatesData);
    }

    loadData();
  }, []);

  return (
    <div className="dashboard">
      <p style={{ color: "#38bdf8", fontWeight: "bold" }}>
        Recruitment Management Platform
      </p>
      <h1>ShiftWise Dashboard</h1>

      <div className="cards">
      <StatsCard title="Total Users" value={usersCount} />
      <StatsCard title="Candidates" value={candidatesCount} />
      <StatsCard title="Recruiters" value={recruitersCount} />
      <StatsCard title="Applications Sent" value={applicationsCount} />
      <StatsCard title="Saved Jobs" value={savedJobsCount} />
      </div>

      <section className="candidates-section">
        <h2>Top Candidates</h2>

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
      </section>
    </div>
  );
}

export default Dashboard;