import { useState } from "react";

function JobDetails({
  setPage,
  selectedJob,
  setAppliedJobs,
  setSavedJobs,
}: {
  setPage: (page: string) => void;
  selectedJob: any;
  setAppliedJobs: React.Dispatch<React.SetStateAction<any[]>>;
  setSavedJobs: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!selectedJob) {
    return (
      <div className="dashboard">
        <h1>No job selected</h1>

        <button className="card-button" onClick={() => setPage("jobs")}>
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Job Details</h1>

      <div className="candidate-card">
        <h2>{selectedJob.title}</h2>

        <p>
          <strong>Location:</strong> {selectedJob.location}
        </p>

        <p>
          We are looking for a {selectedJob.title} with experience in{" "}
          {selectedJob.skills.join(" and ")} to join our team.
        </p>

        <div className="skills">
          {selectedJob.skills.map((skill: string) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <p>
          <strong>Experience Required:</strong>{" "}
          {selectedJob.experienceYears} year(s)
        </p>

        <button
          className="card-button"
          onClick={() => {
            setSavedJobs((previousJobs) => {
              const alreadySaved = previousJobs.some(
                (job) => job.title === selectedJob.title
              );

              if (alreadySaved) {
                return previousJobs;
              }

              return [...previousJobs, selectedJob];
            });

            setPage("savedJobs");
          }}
        >
          Save Job
        </button>

        <button
          className="card-button"
          onClick={() => {
            setAppliedJobs((previousJobs) => {
              const alreadyApplied = previousJobs.some(
                (job) => job.title === selectedJob.title
              );

              if (alreadyApplied) {
                return previousJobs;
              }

              return [
                ...previousJobs,
                {
                  ...selectedJob,
                  appliedDate: new Date().toLocaleDateString("pt-PT"),
                },
              ];
            });

            setSubmitted(true);
            setPage("applications");
          }}
        >
          Apply Now
        </button>

        <button className="card-button" onClick={() => setPage("jobs")}>
          Back to Jobs
        </button>

        {submitted && (
          <p style={{ color: "#38bdf8", fontWeight: "bold" }}>
            Application submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default JobDetails;