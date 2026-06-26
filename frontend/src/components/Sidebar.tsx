import "../styles/Sidebar.css";

interface SidebarProps {
  page: string;
  setPage: (page: string) => void;
}

function Sidebar({ page, setPage }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>ShiftWise</h2>

      <button
        className={page === "dashboard" ? "active" : ""}
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </button>

      <button
        className={page === "candidates" ? "active" : ""}
        onClick={() => setPage("candidates")}
      >
        Candidates
      </button>

      <button
        className={page === "recruiters" ? "active" : ""}
        onClick={() => setPage("recruiters")}
      >
        Recruiters
      </button>

      <button
        className={page === "jobs" ? "active" : ""}
        onClick={() => setPage("jobs")}
      >
        Jobs
      </button>

      <button
        className={page === "applications" ? "active" : ""}
        onClick={() => setPage("applications")}
      >
        Applications
      </button>

      <button
        className={page === "savedJobs" ? "active" : ""}
        onClick={() => setPage("savedJobs")}
      >
        Saved Jobs
      </button>
    </aside>
  );
}

export default Sidebar;