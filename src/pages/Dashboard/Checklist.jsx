import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div className={`p-4 sidebar ${sidebarOpen ? 'open' : ''}`}>
      <h3 onClick={toggleSidebar}>My Dashboard</h3>
      <ul className="menu-list">
        <li>
          <Link className="text-decoration-none text-[#FB8500]" to="/dashboard">
            Dashboard
          </Link>
        </li>
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
  );
};

const ChecklistPage = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, task: 'Book Wedding Venue', completed: true },
    { id: 2, task: 'Choose Wedding Dress', completed: false },
    { id: 3, task: 'Finalize Catering Menu', completed: false },
    { id: 4, task: 'Select Music Playlist', completed: true },
    { id: 5, task: 'Order Wedding Invitations', completed: false },
    { id: 6, task: 'Arrange Transportation', completed: false },
    { id: 7, task: 'Meet with Florist', completed: true },
  ]);

  const toggleTask = (taskId) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <div className="mx-4 p-4">
          <h2 className="check">Wedding Checklist</h2>
          <ul className="checklist">
            {checklist.map((task) => (
              <li
                key={task.id}
                className={task.completed ? 'completed-task' : 'incomplete-task'}
                onClick={() => toggleTask(task.id)}
                style={{ cursor: 'pointer' }}
              >
                {task.completed ? <s>{task.task}</s> : task.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;
