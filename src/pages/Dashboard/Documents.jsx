import { Link } from 'react-router-dom';
import { useState } from 'react';

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

const DocumentsPage = () => {
  const documents = [
    { id: 1, name: 'Wedding Timeline', link: '/public/assets/documents/Wedding Timeline.pdf' },
    { id: 2, name: 'Guest List', link: '/public/assets/documents/Wedding Guest List.pdf' },
    { id: 3, name: 'Catering Menu', link: '/public/assets/documents/Catering Menu.pdf' },
    { id: 4, name: 'Seating Plan', link: '/public/assets/documents/Seating Plan.pdf' },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <div className="mx-5 p-4 mt-4">
          <h2 className="text-[#FB8500] document">Documents</h2>
          <ul className="document-list">
            {documents.map((document) => (
              <li key={document.id}>
                <a
                  href={document.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link" 
                >
                  {document.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
