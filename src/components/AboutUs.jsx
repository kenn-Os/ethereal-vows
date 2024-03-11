/* eslint-disable react/no-unescaped-entities */

import Footer from "../pages/Home/Footer";

const AboutUs = () => {
  return (
    <>
    <div className="bg-[#023047] px-4">
     <h2 className="text-3xl font-bold mb-4 bout text-center">About Us</h2>
      <p className="text-lg mb-6 pbout">
        At <strong className="Ethereal">Ethereal Vows</strong>, we believe that your special day deserves nothing less than perfection. Our dedicated team of professionals is passionate about creating unforgettable weddings tailored to your unique vision and style.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-center bout">Our Mission</h3>
      <p className="text-lg mb-6 pbout">
        Our mission is to turn your wedding dreams into reality. We understand that every couple is unique, and we take pride in curating weddings that reflect your personality, story, and cultural background. From the grandest details to the tiniest nuances, we're committed to crafting a seamless and enchanting experience that you and your guests will cherish forever.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-center bout">Our Approach</h3>
      <p className="text-lg mb-6 pbout">
        Our approach to wedding planning is rooted in collaboration, creativity, and meticulous attention to detail. We see ourselves as your partners in this journey, working closely with you to understand your vision, preferences, and priorities. From choosing the perfect venue to curating an exquisite menu and crafting enchanting decor, we handle every aspect of planning with passion and professionalism.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-center bout">Meet Our Team</h3>


      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Team Member 1 */}
        <div className="col">
          <div className="team-member team">
            <img src="/public/assets/images/kristen-campbell.jpg" alt="Kristen Campbell" className="w-full h-full object-cover rounded" />
            <h4 className="text-xl font-bold my-2 h4s">Kristen Campbell</h4>
            <p className="text-lg p1">Founder &amp; Lead Wedding Planner</p>
            <p className="text-lg p2">
              Kristen is a seasoned wedding planner with over 10 years of experience in the industry. Her creativity and attention to detail have made her a sought-after expert in the field.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="col">
          <div className="team-member team">
            <img src="/public/assets/images/ben-smith.jpg" alt="Ben Smith" className="w-full h-full object-cover rounded" />
            <h4 className="text-xl font-bold my-2 h4s">Ben Smith</h4>
            <p className="text-lg p1">Senior Wedding Coordinator</p>
            <p className="text-lg p2">
              Ben's impeccable organizational skills and warm personality make him a favorite among clients. He ensures that every aspect of the wedding is meticulously planned and executed.
            </p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="col">
          <div className="team-member team">
            <img src="/public/assets/images/michael-b-johnson.jpg" alt="Michael B. Johnson" className="w-full h-full object-cover rounded" />
            <h4 className="text-xl font-bold my-2 h4s">Michael B. Johnson</h4>
            <p className="text-lg p1">Design &amp; Decor Specialist</p>
            <p className="text-lg p2">
              Michael's keen eye for design and flair for creativity bring weddings to life. He transforms venues into enchanting spaces that reflect the couple's style and personality.
            </p>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="col">
          <div className="team-member team">
            <img src="/public/assets/images/emily-candor.jpg" alt="Emily Candor" className="w-full h-full object-cover rounded" />
            <h4 className="text-xl font-bold my-2 h4s">Emily Candor</h4>
            <p className="text-lg p1">Catering Manager</p>
            <p className="text-lg p2">
              Emily's passion for culinary arts shines through her delectable creations. She works closely with clients to curate menus that tantalize taste buds and leave a lasting impression.
            </p>
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="col">
          <div className="team-member team">
            <img src="/public/assets/images/william-shakesbow.jpg" alt="William Shakesbow" className="w-full h-full object-cover rounded" />
            <h4 className="text-xl font-bold my-2 h4s">William Shakesbow</h4>
            <p className="text-lg p1">Logistics Coordinator</p>
            <p className="text-lg p2">
              William's meticulous planning ensures that every logistical detail is flawlessly executed. He works behind the scenes to make sure everything runs smoothly on the wedding day.
            </p>
          </div>
        </div>

        {/* Team Member 6 */}
        <div className="col">
          <div className="team-member team">
            <img src="/public/assets/images/chisom favour.jpg" alt="Sophia Martinez" className="w-full h-33 object-cover rounded" />
            <h4 className="text-xl font-bold my-2 h4s">Chisom Favour</h4>
            <p className="text-lg p1">Entertainment Manager</p>
            <p className="text-lg p2">
              Chisom's passion for entertainment adds excitement to every wedding. She collaborates with top entertainers to create captivating performances for your special day.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
