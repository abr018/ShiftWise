function Applications({
  appliedJobs,
  setAppliedJobs,
}: {
  appliedJobs: any[];
  setAppliedJobs: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  function removeApplication(title: string) {
    setAppliedJobs((previousJobs) =>
      previousJobs.filter((job) => job.title !== title)
    );
  }

  return (
    <div className="dashboard">
      <h1>Applications</h1>

      {appliedJobs.length === 0 && (
        <p>You have not applied to any jobs yet.</p>
      )}

      <div className="candidate-list">
        {appliedJobs.map((job, index) => (
          <div className="candidate-card" key={index}>
            <h3>{job.title}</h3>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Status:</strong> Applied
            </p>

            <p>
              <strong>Applied on:</strong> {job.appliedDate}
            </p>

            <button
              className="card-button"
              onClick={() => removeApplication(job.title)}
            >
              Remove Application
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;