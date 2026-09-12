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
    getJobs()
      .then((data) => {
        const normalizedJobs = data.map((job: any) => ({
          ...job,
          skills:
            typeof job.skills === "string"
              ? job.skills
                  .split(",")
                  .map((skill: string) => skill.trim())
              : job.skills || [],
        }));

        setJobs(normalizedJobs);
      })
      .catch((error) => {
        console.error("Error loading jobs:", error);
      });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const searchValue = search.toLowerCase();

    const title = job.title?.toLowerCase() || "";
    const location = job.location?.toLowerCase() || "";

    const matchesSearch =
      title.includes(searchValue) ||
      location.includes(searchValue) ||
      job.skills.some((skill: string) =>
        skill.toLowerCase().includes(searchValue)
      );

    let matchesFilter = true;

    if (filter === "Frontend") {
      matchesFilter =
        title.includes("frontend") ||
        job.skills.some((skill: string) =>
          ["react", "javascript", "typescript", "html", "css"].includes(
            skill.toLowerCase()
          )
        );
    }

    if (filter === "Backend") {
      matchesFilter =
        title.includes("backend") ||
        job.skills.some((skill: string) =>
          ["node.js", "node", "express", "prisma", "mysql"].includes(
            skill.toLowerCase()
          )
        );
    }

    if (filter === "Remote") {
      matchesFilter = location.includes("remote");
    }

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
        {sortedJobs.length === 0 && <p>No jobs found.</p>}

        {sortedJobs.map((job) => (
          <div className="candidate-card" key={job.id}>
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