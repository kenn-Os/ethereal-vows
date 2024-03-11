import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../pages/Home/Footer';

const Venues = () => {
  const venuesData = [
    {
      title: 'The Grand Ballroom',
      location: 'New York City, USA',
      description: 'The Grand Ballroom is a luxurious venue located in the heart of Manhattan. With its stunning chandeliers and elegant decor, it provides the perfect setting for a glamorous and sophisticated wedding.',
      image: '/public/assets/images/ballroom.jpg',  
    },
    {
      title: 'Seaside Gardens',
      location: 'Malibu, California, USA',
      description: 'Seaside Gardens offers breathtaking ocean views and lush gardens, creating a romantic ambiance for your beachside wedding. The picturesque setting is ideal for couples seeking a serene and intimate celebration.',
      image: '/public/assets/images/seaside.jpg',
    },
    {
      title: 'Château de Versailles',
      location: 'Versailles, France',
      description: 'Experience the epitome of opulence at the Château de Versailles. This historic palace provides a regal backdrop for a fairytale wedding, with its magnificent architecture and meticulously manicured gardens.',
      image: '/public/assets/images/château.jpg',
    },
    {
      title: 'Tropical Paradise Resort',
      location: 'Bali, Indonesia',
      description: 'Escape to the enchanting Tropical Paradise Resort in Bali. Surrounded by lush tropical gardens and overlooking the crystal-clear waters of the Indian Ocean, this venue promises a destination wedding like no other.',
      image: '/public/assets/images/tropical.jpg',
    },
    {
      title: 'Rustic Vineyard Estate',
      location: 'Napa Valley, California, USA',
      description: 'Celebrate your special day amidst the rolling vineyards of Napa Valley. The Rustic Vineyard Estate offers a charming and rustic atmosphere, perfect for wine enthusiasts and couples seeking a romantic vineyard wedding.',
      image: '/public/assets/images/rustic.jpg',
    },
    {
      title: 'Enchanted Forest Retreat',
      location: 'Black Forest, Germany',
      description: 'Step into a fairytale at the Enchanted Forest Retreat. Nestled within the mystical Black Forest, this venue transports you to a magical world with its lush woodland surroundings and whimsical decor.',
      image: '/public/assets/images/enchanted.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const headingStyle = {
    fontFamily:
    "Monotype Corsiva",
    color: "#fb8500"
  };
  const h3Style = {
    fontFamily:
    "Dancing Script Regular",
    color: "#FB8500",
    fontWeight: "bold"
  };
  const pStyle = {
    fontFamily:
    "'New York', serif",
    color: "#FFB703",
    fontWeight: "bold"
  };
  const p2Style = {
    fontFamily:
    "'New York', serif",
    color: "#E2C7C7",
    fontWeight: "bold"
  };

  return (
    <>
    <div className="bg-[#023047] my-">
      <h2 className="text-center" style={headingStyle}>Wedding Venues</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Slider {...settings}>
            {venuesData.map((venue, index) => (
              <div key={index} className="venue-card bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
                <div className="venue-image-container">
                  <img
                    src={venue.image}
                    alt={`Venue ${index + 1}`}
                    className="venue-image"
                  />
                </div>
                <h3 style={h3Style}>{venue.title}</h3>
                <p style={pStyle}>Location: {venue.location}</p>
                <p style={p2Style}>{venue.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Venues;
