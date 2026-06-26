import { useEffect, useState } from "react";
import { getJobs } from "../services/api";

function Jobs({
  setPage,
  setSelectedJob,
}: {
  setPage: (page: string) => void;
  setSelectedJob: (job: any) => void;
}) {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data);
    });
  }, []);

const filteredJobs = jobs.filter((job) => {
  const matchesSearch =
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase()) ||
    job.skills.some((skill: string) =>
      skill.toLowerCase().includes(search.toLowerCase())
    );

  const matchesFilter =
    filter === "All" ||
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.location.toLowerCase().includes(filter.toLowerCase());

  return matchesSearch && matchesFilter;
});

const sortedJobs = [...filteredJobs].sort((a, b) => {
  if (sortBy === "AZ") {
    return a.title.localeCompare(b.title);
  }

  if (sortBy === "ZA") {
    return b.title.localeCompare(a.title);
  }

  if (sortBy === "Experience") {
    return b.experienceYears - a.experienceYears;
  }

  return 0;
});

  return (
    <div className="dashboard">
      <h1>Jobs</h1>

      <input
        type="text"
        placeholder="Search by title, skill or location..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "25px",
        }}
      />
        <div className="app-buttons">
        <button
          className={filter === "All" ? "active-filter" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        
        <button
          className={filter === "Frontend" ? "active-filter" : ""}
          onClick={() => setFilter("Frontend")}
        >
          Frontend
        </button>

        <button
          className={filter === "Backend" ? "active-filter" : ""}
          onClick={() => setFilter("Backend")}
        >
          Backend
        </button>

        <button
          className={filter === "Remote" ? "active-filter" : ""}
          onClick={() => setFilter("Remote")}
        >
          Remote
        </button>
        </div>

      <div style={{ marginBottom: "20px" }}>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="Default">Sort by</option>
        <option value="AZ">Title (A-Z)</option>
        <option value="ZA">Title (Z-A)</option>
        <option value="Experience">Experience</option>
      </select>
      </div>  

      <div className="candidate-list">
        {sortedJobs.length === 0 && (
          <p>No jobs found.</p>
        )}
        {sortedJobs.map((job, index) => (
          <div className="candidate-card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>

            <div className="skills">
              {job.skills.map((skill: string) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <p>Experience: {job.experienceYears} year(s)</p>

            <button
              className="card-button"
              onClick={() => {
                setSelectedJob(job);
                setPage("jobDetails");
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;