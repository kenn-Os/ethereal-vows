import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setIsDark(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {isDark
        ? <style>
            {`
          
        body {
          background-color: var(--background-dark);
        }
        ::-webkit-scrollbar {
  background-color: var(--background-dark);

}::-webkit-scrollbar-thumb{
  background-color: var(--primary-dark);
}
        `}
          </style>
        : <style>
            {`
        body {
          background-color: var(--background-light);
        }
        ::-webkit-scrollbar {
  background-color: var(--background-light);

}::-webkit-scrollbar-thumb{
  background-color: var(--primary-light);
}
        `}
          </style>}
      <div className={isDark ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;


