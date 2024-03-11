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

const VendorManagementPage = () => {
  const vendors = [
    { id: 1, name: 'Floral Delights', contact: 'Smith (smith@hotmail.com)' },
    { id: 2, name: 'Captured Moments Photography', contact: 'Michael (mike@gmail.com)' },
    { id: 3, name: 'Catering Supreme', contact: 'Anna (anna@cateringsupreme.com)' },
    { id: 4, name: 'Music Harmony', contact: 'David (david@musicharmony.com)' },
    { id: 5, name: 'Venue Elegance', contact: 'Jessica (jessica@venueelegance.com)' },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <div className="mx-4 py-4 mt-4">
          <h2 className="vendor">Vendor Management</h2>
          <ul>
            {vendors.map((vendor) => (
              <li key={vendor.id}>
                <strong>{vendor.name}</strong> - Contact: {vendor.contact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VendorManagementPage;
