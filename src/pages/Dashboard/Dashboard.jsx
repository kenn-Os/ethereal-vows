import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div className="dashboard-container bg-[#023047]">
      <div className={`mx-4 sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h3 onClick={toggleSidebar}>My Dashboard</h3>
        <ul className="menu-list">
          <li>
            <Link className="text-decoration-none text-[#FB8500]" to="/vendor-management">
              Vendor Management
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-[#FB8500]" to="/documents">
              Documents
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-[#FB8500]" to="/checklist">
              Checklist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const user = {
    name: 'Kenny',
    email: 'ken@gmail.com',
    weddingDate: '2023-12-31',
    budget: 15000,
    progress: 60,
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="card dashboard-card">
          <div className="card-header">
            <h2 className="text-center dash text-[#Fb5800]">
              Welcome to Your Dashboard, {user.name}!
            </h2>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-6">
                <h3>Email: {user.email}</h3>
                <h3>Wedding Date: {user.weddingDate}</h3>
                <h3>
                  Wedding Progress: {user.progress}%{' '}
                  <progress value={user.progress} max="100"></progress>
                </h3>
                <h3>Budget: ${user.budget}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
