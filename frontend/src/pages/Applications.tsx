import { useEffect, useState } from "react";
import { getApplications } from "../services/api";

function Applications() {
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    getApplications()
      .then((data) => setApplications(data))
      .catch((error) =>
        console.error("Error loading applications:", error)
      );
  }, []);

  return (
    <div className="dashboard">
      <h1>Applications</h1>

      {applications.length === 0 && (
        <p>No applications found.</p>
      )}

      <div className="candidate-list">
        {applications.map((application) => (
          <div className="candidate-card" key={application.id}>
            <h3>{application.job?.title}</h3>

            <p>
              <strong>Candidate:</strong>{" "}
              {application.candidate?.user?.name}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {application.job?.location}
            </p>

            <p>
              <strong>Status:</strong> {application.status}
            </p>

            <p>
              <strong>Applied on:</strong>{" "}
              {new Date(application.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;