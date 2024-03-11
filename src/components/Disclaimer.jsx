import Footer from "../pages/Home/Footer"

const Disclaimer = () => {
  return (
    <>
    <div className="p-4 md:w-3/4 lg:w-1/2 mx-auto my-3">
      <h2 className="text-2xl font-bold mb-5 my-20 text-center disclaimer">Disclaimer</h2>
      <p className="mb-4">
        The information provided by Ethereal Vows on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
      </p>

      <p className="mb-4">
        Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
      </p>

      <p className="mb-4">
        Through this website, you can link to other websites that are not under the control of Ethereal Vows. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
      </p>

      <p className="mb-4">
        Every effort is made to keep the website up and running smoothly. However, Ethereal Vows takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Disclaimer;
