import Footer from "../pages/Home/Footer";

/* eslint-disable react/no-unescaped-entities */
const PrivacyPolicy = () => {
  return (
    <>
    <div className="p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4 privacy text-center">Privacy Policy</h2>
      <p className="mb-4">
        At Ethereal Vows, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your data when you interact with our wedding planning services.
      </p>
      <h3 className="text-xl font-bold mb-2">Information We Collect</h3>
      <p className="mb-4">
        We may collect the following types of personal information from you:
      </p>
      <ul className="list-disc ml-4 mb-4">
        <li>Your name, email address, and contact details when you sign up for an account</li>
        <li>Information about your wedding preferences and requirements</li>
        <li>Payment information for processing transactions</li>
        <li>Communications and messages sent through our platform</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">How We Use Your Information</h3>
      <p className="mb-4">
        We use your information to provide and improve our wedding planning services. This includes:
      </p>
      <ul className="list-disc ml-4 mb-4">
        <li>Assisting with wedding planning and coordination</li>
        <li>Suggesting relevant vendors and services based on your preferences</li>
        <li>Processing payments and managing billing</li>
        <li>Communicating with you regarding your wedding plans</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Information Sharing</h3>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted vendors and service providers who assist us in delivering our services to you. We ensure that these third parties are bound by confidentiality and security obligations.
      </p>

      <h3 className="text-xl font-bold mb-2">Security</h3>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h3 className="text-xl font-bold mb-2">Changes to Privacy Policy</h3>
      <p className="mb-4">
        We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.
      </p>

      <h3 className="text-xl font-bold mb-2">Contact Us</h3>
      <p className="mb-4">
        If you have any questions or concerns about our privacy policy, please contact us at:
      </p>
      <ul className="list-disc ml-4 mb-4">
        <li>Email: privacy@etherealvows.com</li>
        <li>Phone: +234 (903) 127-2378</li>
        <li>Address: 123 Ken's Avenue, New York, USA</li>
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
