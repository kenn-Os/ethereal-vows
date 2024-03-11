/* eslint-disable react/no-unescaped-entities */
import Footer from "./Footer";
import { useEffect, useState } from "react";


const Homepage = () => {
  const targetText = "Dare To Dream, Live Inspired!!!";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < targetText.length) {
        setTypedText(targetText.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    const typingInterval = setInterval(typeText, 100);
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);
  const heroStyle = {
    
    backgroundImage: "url('/public/assets/images/bg15.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '150vh',
    width: '100%',
  
  };

 
  const h1Style= {
    fontFamily: "Monotype Corsiva",
    fontSize: '5rem',
    color:'#FB8500',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '50px',   

  };
  const pStyle={
    fontFamily: "Dancing Script",
    fontSize: "30px",
  }

  return (
    <>
    <div>
      {/* Hero Section */}
      <section className="hero" style={heroStyle}>
      <div className=" mx-auto">
        <div className="hero-content text-center text-white py-5">
          <h1 style={h1Style} className="text-4xl font-bold mt-60">Ethereal Vows</h1>
          <p style={pStyle} className="text-lg mt-5">
                {typedText}
              </p>
        </div>
      </div>
    </section>
    </div>
  <Footer/>
  </>
  );
};

export default Homepage;