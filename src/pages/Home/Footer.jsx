const Footer = () => {
  return (
    <footer className="bg-[#023047] text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ethereal Vows. All rights reserved.</p>
        <p>
          Designed and Developed by {''}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 text-decoration-none"
          >
            KTechCoders
          </a>
        </p>
        <p>
          Address: 123 Ken Avenue, New York, USA
          <br />
          Phone: +234 (903) 127-2378
          <br />
          Email: info@etherealvows.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
