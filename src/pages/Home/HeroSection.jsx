/* eslint-disable no-undef */
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useScroll, useTransform, motion } from "framer-motion";

const HeroSection = () => {
  const {scrollY} = useScroll();
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const imageTop = useTransform(scrollY, [1, 500], [0, 200]);
  
  return (
    <>
    <div className="HeroSection relative h-[100vh] md:h-[85vh] overflow-hidden w-full bg-background-light dark:bg-background-dark">
      <motion.img
      style={{
        opacity: imageOpacity,
        translateY: imageTop
      }}
        src="/public/assets/images/wed1.jpg"
        alt=""
        className="absolute w-full h-full top-0 left-0"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-background-dark to-transparent " />
      <div className="relative w-full h-full  ">

        <div className="container mx-auto h-full text-text-light flex items-center justify-around">
          <div className="w-10/12 md:w-1/2 h-fit">
              <h1  className="font-extrabold text-[60px] md:text-[4vw]">Welcome to Our Wedding Planning Website</h1>
              <p>
                  We are excited to help you plan your dream wedding! Our team of experts will make
                  sure your special day is unforgettable.
              </p>

          </div>

        </div>
      </div>

          <h2>Why Choose Us?</h2>
          <ul>
              <li>Years of Experience: With over a decade of experience, we know what it takes to create magical weddings.</li>
              <li>Personalized Service: We understand that every couple is unique, and we tailor our services to match your preferences.</li>
              <li>Attention to Detail: From the grand arrangements to the tiniest details, we leave no stone unturned in ensuring perfection.</li>
              <li>Vendor Network: Our extensive network of trusted vendors enables us to offer you the best deals and services.</li>
              <li>Stress-Free Planning: Sit back, relax, and let us handle all the planning and coordination while you enjoy the process.</li>
          </ul>

          <h2>Our Approach</h2>
          <p>
              At our wedding planning company, we believe in creating weddings that reflect your love story and personalities. Our approach is collaborative, and we work closely with you to understand your vision and turn it into reality.
          </p>

          <h2>Featured Weddings</h2>
          <div style={{ maxWidth: '600px', margin: 'auto' }}>
              <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                  {featuredWeddings.map((wedding) => (
                      <div key={wedding.id}>
                          <img
                              // eslint-disable-next-line no-undef
                              src={require(`./images/${wedding.image}`).default}
                              alt={wedding.name} />
                          <p>{wedding.testimonial}</p>
                          <h4>{wedding.name}</h4>
                          <p>{wedding.location}</p>
                      </div>
                  ))}
              </Carousel>
          </div>

      </div>
      <h2>Get Started</h2><p>
              Ready to start planning your dream wedding? Get in touch with us to schedule a free consultation. Let us make your special day truly memorable!
          </p><button>Contact Us</button></>
    
  
  );
};

export default HeroSection;
