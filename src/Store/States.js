import { createContext, useEffect, useState } from "react";

export const AppStates = createContext();
export const StateProvider = ({ children }) => {
  const [scroll, setScroll] = useState();
  const [navbar,setNavbar]=useState(false);

  const onScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <AppStates.Provider value={{ scroll, setScroll,navbar,setNavbar}}>
      {children}
    </AppStates.Provider>
  );
};
