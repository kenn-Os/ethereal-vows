import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import AnimatedPage from "../../components/AnimatedPage";


const slideInVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };
  
  
  return (
    <AnimatedPage>
      <motion.main
        className="Login bg-[#FB8500]"
        initial="initial"
        animate="animate"
        variants={slideInVariants}
      >
        <section className="h-screen flex">
          <img
            src="/public/assets/images/emily-james.jpg"
            alt="background"
            className="hidden md:block md:w-1/2 h-full object-cover"
          />
          <div className="h-full w-full md:w-1/2 flex justify-center md:justify-start items-center px-3 md:px-8 lg:px-10 2xl:px-16">
            <div className="dark:text-text-light">
              <h1 className="font-extrabold login text-3xl md:text-[4vw] text-[#023047] ">
                Welcome Back!
              </h1>
              <p className="opacity-80 mt-5">Login and Explore...</p>
              <form onSubmit={handleLogin} className="flex flex-col py-4">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="yourname@example.com"
                  id="email"
                  className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-background-light text-[#FFB703] mb-2"
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  placeholder="Enter Your Password Here"
                  id="password"
                  className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-background-light text-[#FFB703] mb-2"
                />

                <input
                  type="submit"
                  value="Login"
                  className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-[#FB8500] text-[#FB8500] my-3 font-bold text-lg"
                />
              </form>
              <div className="flex space-x-8 justify-between">
                <Link className="hover:text-[#023047] tex" to="/signup">
                  Signup Instead
                </Link>
                <Link className="hover:text-[#023047] tex" to="/forgot-password">
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </AnimatedPage>
  );
};

export default Login;
