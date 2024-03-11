import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    image: '/public/assets/images/emily-james.jpg',
    message: "Our wedding was perfect, thanks to this team! They made the entire planning process smooth and stress-free, and the event was nothing short of magical. Highly recommended!",
    name: "- Emily & James",
  },
  {
    image: '/public/assets/images/sarah-michael.jpg',
    message: "Thank you for making our special day truly special. Your attention to detail and creativity were outstanding. We could not have asked for a better wedding planning team!",
    name: "- Sarah & Michael",
  },
  {
    image: '/public/assets/images/emma-jake.jpg',
    message: "From the initial consultation to the big day, this team exceeded our expectations. They went above and beyond to ensure every aspect of our wedding was perfect.",
    name: "- Lisa & David",
  },
  {
    image: '/public/assets/images/amanda-mark.jpg',
    message: "Our wedding was a dream come true, and we owe it all to this incredible team. Their professionalism and creativity made our day unforgettable.",
    name: "- Amanda & Mark",
  },
  {
    image: '/public/assets/images/bashir-olawoyin.jpg',
    message: "We are so grateful for this team's hard work and dedication. Our wedding turned out even better than we had imagined. They truly made our vision a reality.",
    name: "- Mark & Jane",
  },
  {
    image: '/public/assets/images/oluwa-dami.jpg',
    message: "Exceptional service from start to finish. The team's expertise and flexibility made the planning process stress-free, and our wedding day was perfect in every way.",
    name: "- Oluwafemi & Damilola",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="bg-[#023047] py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center m-6 text-[#FB6700] testimonial">Testimonials</h2>
        <div className="slider">
          <Slider {...sliderSettings}>
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-slide bg-cover bg-center bg-no-repeat p-6 md:p-8 lg:p-10 xl:p-10 shadow flex flex-col justify-center items-center"
              >
                <div className="mb-4">
                <img
                    src={testimonial.image}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 object-cover mx-auto"
                  />
                </div>
                <p className="text-lg testimonial-p mb-4 text-[#FB8500] text-center">{testimonial.message}</p>
                <span className="block font-[800] text-[#FB6700] text-center">{testimonial.name}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  
  );
};

export default Testimonials;
