import "../styles/Sidebar.css";

interface SidebarProps {
  page: string;
  setPage: (page: string) => void;
}

function Sidebar({ page, setPage }: SidebarProps) {
  const menuItems = [
    { label: "Dashboard", page: "dashboard", icon: "◈" },
    { label: "Candidates", page: "candidates", icon: "◉" },
    { label: "Recruiters", page: "recruiters", icon: "◎" },
    { label: "Jobs", page: "jobs", icon: "▣" },
    { label: "Applications", page: "applications", icon: "✓" },
    { label: "Saved Jobs", page: "savedJobs", icon: "☆" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">S</div>

        <div>
          <h2>ShiftWise</h2>
          <span>Recruitment Platform</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.page}
            className={page === item.page ? "active" : ""}
            onClick={() => setPage(item.page)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <button
  className="logout-button"
  onClick={() => {
    localStorage.removeItem("loggedUser");
    setPage("login");
  }}
>
  ↪ Logout
</button>
    </aside>
  );
}

export default Sidebar;