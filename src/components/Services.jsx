import Footer from "../pages/Home/Footer";
import TestimonialsSection from '../pages/Home/TestimonialsSection'
/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  const headingStyle = {
    fontFamily:
    "Monotype Corsiva",
  };

  return (
    <>
    <div className="py-4 p-4 text-[#FB8500] bg-[#023047]">
      <h2 className="text-center" style={headingStyle}>
        Our Services
      </h2>

      {/* Wedding Planning Service */}
      <div className="service row">
        <div className="col-md-3">
          <img
            src="/assets/images/wedding-planning.jpg"
            alt="Wedding Planning"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9 text-light">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Wedding Planning
          </h3>
          <p>
            Our experienced team will take care of every detail, ensuring a stress-free wedding
            planning experience. From the initial consultation to the final farewell, we will be by
            your side, making sure your dream wedding becomes a reality. Our services include:
          </p>
          <ul>
            <li>Personalized wedding theme and design creation</li>
            <li>Venue selection and coordination</li>
            <li>Vendor sourcing and management (photographer, videographer, florist, etc.)</li>
            <li>Guest management and RSVP tracking</li>
            <li>Budget planning and management</li>
            <li>Timeline and schedule creation</li>
            <li>On-the-day coordination and management</li>
          </ul>
        </div>
      </div>

      {/* Venue Selection Service */}
      <div className="service row text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/venue-selection.jpg"
            alt="Venue Selection"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Venue Selection
          </h3>
          <p>
            Choosing the perfect wedding venue sets the stage for your special day. Our team will
            assist you in finding the ideal venue that matches your vision, budget, and guest count.
            We will:
          </p>
          <ul>
            <li>Present a curated selection of venues that align with your preferences</li>
            <li>Handle venue visits and negotiations</li>
            <li>Coordinate logistics with the venue management</li>
            <li>Ensure the venue meets all your requirements for the ceremony and reception</li>
          </ul>
        </div>
      </div>

      {/* Catering Services */}
      <div className="service row pt-4 text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/catering-services.jpg"
            alt="Catering Services"
            className="w-full h-[13rem] object-cover mb-4"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Catering Services
          </h3>
          <p>
            Delight your guests with a delectable dining experience. Our catering services offer a
            diverse range of cuisines and menus that can be tailored to your tastes and dietary
            preferences. Our catering team will:
          </p>
          <ul>
            <li>Create a custom menu based on your preferences and requirements</li>
            <li>Provide tastings to ensure the menu meets your expectations</li>
            <li>Handle all aspects of food presentation and service</li>
            <li>Accommodate dietary restrictions and special requests</li>
          </ul>
        </div>
      </div>

      {/* Photography & Videography */}
      <div className="service row pt-4 text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/photography.jpg"
            alt="Photography & Videography"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Photography & Videography
          </h3>
          <p>
            Capture the precious moments of your wedding day with our professional photography and
            videography services. Our talented photographers and videographers will:
          </p>
          <ul>
            <li>Document every important moment, from getting ready to the last dance</li>
            <li>Create a beautiful wedding album and cinematic wedding film</li>
            <li>Provide edited high-resolution images and videos for you to cherish forever</li>
          </ul>
        </div>
      </div>

      {/* Floral Design */}
      <div className="service row pt-4 text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/floral-design.jpg"
            alt="Floral Design"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Floral Design
          </h3>
          <p>
            Transform your wedding venue into a floral wonderland with our exquisite floral design
            services. Our skilled florists will:
          </p>
          <ul>
            <li>Create stunning bridal bouquets and boutonnieres</li>
            <li>Design breathtaking floral arrangements for the ceremony and reception</li>
            <li>Ensure that every floral element complements your chosen theme and color palette</li>
          </ul>
        </div>
      </div>

      {/* Entertainment */}
      <div className="service row pt-4 text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/entertainment.jpg"
            alt="Entertainment"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Entertainment
          </h3>
          <p>
            Keep the celebration alive with our top-notch entertainment services. From live bands to
            DJs, we have a variety of entertainment options to keep your guests dancing and having a
            great time throughout the event.
          </p>
        </div>
      </div>

      {/* Wedding Attire */}
      <div className="service row pt-4 text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/wedding-attire.jpg"
            alt="Wedding Attire"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Wedding Attire
          </h3>
          <p>
            Look your best on your big day with our wedding attire services. We collaborate with
            renowned designers and boutiques to help you find the perfect wedding gown, groom's suit,
            and attire for the bridal party.
          </p>
        </div>
      </div>

      {/* Transportation */}
      <div className="service row pt-4">
        <div className="col-md-3">
          <img
            src="/assets/images/wedding-transportation.jpg"
            alt="Transportation"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9 text-light">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Transportation
          </h3>
          <p>
            Arrive in style with our luxury transportation services. Whether you prefer a classic
            limousine or a vintage car, we'll ensure a grand entrance that will leave a lasting
            impression.
          </p>
        </div>
      </div>

      {/* Invitations & Stationery */}
      <div className="service row pt-4 text-light">
        <div className="col-md-3">
          <img
            src="/assets/images/invitations.jpg"
            alt="Invitations & Stationery"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="text-[#FB8500]" style={headingStyle}>
            Invitations &amp; Stationery
          </h3>
          <p>
            Set the tone for your wedding with beautifully designed invitations and stationery. Our
            creative team will craft personalized designs that reflect your style and theme, making
            your wedding invitations truly special.
          </p>
        </div>
      </div>
    </div>
    <TestimonialsSection/>
    <Footer/>
    </>
  );
};


export default Services;

