import { useState } from "react";
import { Link } from "react-router-dom";
import TermsOfService from "../Auth/TermsOfService";
import Footer from "../Home/Footer";
import AnimatedPage from "../../components/AnimatedPage";

const Signup = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const passwordRequirements = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSignup = (e) => {
    e.preventDefault();

    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let hasErrors = false;

    if (!username) {
      setUsernameError("Please enter a username.");
      hasErrors = true;
    }

    if (!email) {
      setEmailError("Please enter an email.");
      hasErrors = true;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      hasErrors = true;
    } else if (!passwordRequirements.test(password)) {
      setPasswordError("Password must be at least 8 characters long and include numbers, letters, and special characters.");
      hasErrors = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
      hasErrors = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      hasErrors = true;
    }

    if (!hasErrors) {
      setSignupSuccess(true);
    }
  };

  return (
    <AnimatedPage>
      <main className="Signup bg-[#FB8500]">
        <section className="h-screen flex flex-row-reverse">
          <img
            src="/public/assets/images/emma-jake.jpg"
            alt="background"
            className="hidden md:block md:w-1/2 h-full object-cover"
          />
          <div className="h-full w-full md:w-1/2 flex justify-center md:justify-start items-center px-3 md:px-8 lg:px-10 2xl:px-16">
            <div className="dark:text-text-light">
              <h1 className="font-extrabold sign-up text-3xl md:text-[4vw] text-[#023047] ">
                Sign Up!
              </h1>
              <p className="opacity-80 mt-5">
                Dare To Dream, Live Inspired....
              </p>
              {termsAgreed ? (
                <form onSubmit={handleSignup} className="flex flex-col py-4">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-background-light text-[#FFB703] mb-2"
                  />
                  {usernameError && <p className="text-red-500">{usernameError}</p>}

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    placeholder="yourname@example.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-background-light text-[#FFB703] mb-2"
                  />
                  {emailError && <p className="text-red-700">{emailError}</p>}

                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password Here"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-background-light text-[#FFB703] mb-2"
                  />
                  {passwordError && <p className="text-red-700">{passwordError}</p>}
                  {password && (
                    <div className="relative w-full mt-2">
                      <div
                        className={`h-2 w-full ${
                          passwordRequirements.test(password)
                            ? "bg-green-600"
                            : "bg-red-600"
                        } rounded-md`}
                      ></div>
                      <div
                        className={`absolute ${
                          passwordRequirements.test(password)
                            ? "right-0"
                            : "right-2/3"
                        } transform translate-y-[-50%]`}
                      >
                        <p
                          className={`text-xs ${
                            passwordRequirements.test(password)
                              ? "text-[#023047]"
                              : "text-[#023047]"
                          }`}
                        >
                          {passwordRequirements.test(password)
                            ? "Strong"
                            : "Weak"}
                        </p>
                      </div>
                    </div>
                  )}

                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    placeholder="Confirm Your Password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-background-light text-[#FFB703] mb-2"
                  />
                  {confirmPasswordError && <p className="text-red-700">{confirmPasswordError}</p>}

                  <input
                    type="submit"
                    value="Sign Up"
                    className="p-3 rounded-md shadow outline-none bg-[#023047] dark:bg-[#023047] text-[#FB8500] my-3 font-bold text-lg"
                  />
                  {signupSuccess && <p className="text-green-600">Signup successful!</p>}
                </form>
              ) : (
                <TermsOfService setTermsAgreed={setTermsAgreed} />
              )}
              <div className="flex justify-between">
                <p>
                  Already have an account? <Link to="/login" className="text-[#023047] text-decoration-none">Login Instead</Link>
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                 <Link to="/disclaimer" className="text-[#023047] text-decoration-none">Disclaimer!</Link>
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  <Link to="/privacy-policy" className="text-[#023047] text-decoration-none">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default Signup;
