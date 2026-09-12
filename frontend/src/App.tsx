import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import JobDetails from "./pages/JobDetails";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import Recruiters from "./pages/Recruiters";
import { useState, useEffect } from "react";
import "./App.css";
import Jobs from "./pages/Jobs";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
  const [page, setPage] = useState(() => {
  const loggedUser = localStorage.getItem("loggedUser");

  return loggedUser ? "dashboard" : "login";
});
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [appliedJobs, setAppliedJobs] = useState<any[]>(() => {
  const savedApplications = localStorage.getItem("appliedJobs");
  return savedApplications ? JSON.parse(savedApplications) : [];
});

const [savedJobs, setSavedJobs] = useState<any[]>(() => {
  const savedJobsData = localStorage.getItem("savedJobs");
  return savedJobsData ? JSON.parse(savedJobsData) : [];
});

useEffect(() => {
  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
}, [appliedJobs]);

useEffect(() => {
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
}, [savedJobs]);

  return (
  <>
    {page === "login" ? (
      <Login setPage={setPage} />
    ) : (
      <div className="app-layout">

        <Sidebar page={page} setPage={setPage} />

        <main className="app-content">

          {page === "dashboard" && (
            <Dashboard
              applicationsCount={appliedJobs.length}
              savedJobsCount={savedJobs.length}
            />
          )}

          {page === "candidates" && <Candidates />}

          {page === "recruiters" && <Recruiters />}

          {page === "jobs" && (
            <Jobs
              setPage={setPage}
              setSelectedJob={setSelectedJob}
            />
          )}

          {page === "jobDetails" && (
            <JobDetails
              setPage={setPage}
              selectedJob={selectedJob}
              setAppliedJobs={setAppliedJobs}
              setSavedJobs={setSavedJobs}
            />
          )}

          {page === "applications" && <Applications />}

          {page === "savedJobs" && (
            <SavedJobs
              savedJobs={savedJobs}
              setSavedJobs={setSavedJobs}
            />
          )}

        </main>
      </div>
    )}
  </>
);
 
  }

export default App;