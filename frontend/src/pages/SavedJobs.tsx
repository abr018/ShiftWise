function SavedJobs({
  savedJobs,
  setSavedJobs,
}: {
  savedJobs: any[];
  setSavedJobs: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  function removeSavedJob(title: string) {
    setSavedJobs((previousJobs) =>
      previousJobs.filter((job) => job.title !== title)
    );
  }

  return (
    <div className="dashboard">
      <h1>Saved Jobs</h1>

      {savedJobs.length === 0 && (
        <p>You have not saved any jobs yet.</p>
      )}

      <div className="candidate-list">
        {savedJobs.map((job, index) => (
          <div className="candidate-card" key={index}>
            <h3>{job.title}</h3>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Experience:</strong> {job.experienceYears} year(s)
            </p>

            <button
              className="card-button"
              onClick={() => removeSavedJob(job.title)}
            >
              Remove Saved Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedJobs;