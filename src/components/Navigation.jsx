import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; // Import NavLink

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#023047] p-2 sticky-top">
      <div className="mx-auto flex justify-between items-center">
        <NavLink to="/" className="lg:hidden ml-5">
          <img src="/public/assets/images/logo sm.png" alt="Small Logo" className="mt-2 mb-4 h-12" />
        </NavLink>

        <div className="lg:flex items-center">
          <div className="lg:hidden ml-auto mr-3">
            <button
              onClick={toggleNavigation}
              className="text-[#FB8500] text-xl focus:outline-none"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
          
          <NavLink to="/" className="lg:block hidden">
            <img src="/public/assets/images/logo 4.png" alt="Large Logo" className="mx-5 mt-2 mb-4 h-12" />
          </NavLink>
        </div>

        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex mt-4 lg:mt-0">
            <li>
              <NavLink
                exact
                to="/"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/venues"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Venues
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="text-decoration-none te py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#FB8500] hover:text-[#023047]"
                activeClassName="bg-[#FB8500] text-[#023047]"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
