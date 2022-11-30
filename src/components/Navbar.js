import React, { createContext, useContext } from "react";
import { Link } from "react-scroll";
import "../CSS/navbar.css";
import { FiMenu } from "react-icons/fi";
import { AppStates } from "../Store/States";
import { motion,AnimatePresence} from "framer-motion";
import { useDisclosure } from "@chakra-ui/react";
import Menu from "../Parts/Menu";

const links = [{name:"HOME",link:"hero"}, {name:"ABOUT",link:"about"}, {name:"SERVICES",link:"services"}, {name:"PROJECTS",link:"projects"}, {name:"TESTIMONIALS",link:"testimonials"}, {name:"CONTACT",link:"contact"}];
const container={
  hidden:{
    x:"80vw",
    opacity:"50%"
  },
  visible:{
    x:"0vh",
    opacity:"100%",
    transition:{
      duration:0.5
    }
  },
  exit:{x:"80vw",transition:{
    duration:0.5,
    opacity:"0%",
  }}
}
export const DrawerContext=createContext();
 const Navbar = () => {
  const { scroll, navbar,setNavbar } = useContext(AppStates);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <motion.div
      className={`container-fluid navbar-parent fixed-top ${
        scroll > 35 ? "navbar-bg p-2 nav-shadow" : "navbar-bg-2 p-4"
      }`}
    >
      <div className="container-md p-0">
        <div className="row align-items-center navbar-row">
          <div className="col-lg-3 col-md col">
            <Link className="app-logo text-decotration-none" to="hero">
              Hasnain
            </Link>
          </div>
          <div className="col large-screen-nav" style={{overflow:"hidden"}}>
            <div className="navbar-larges-navlinks">
                <AnimatePresence>
              {navbar?<motion.ul variants={container} initial="hidden" animate="visible" exit="exit" className="nav justify-content-end">
                {links.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link to={item.link}  activeClass="active-link" spy={true} smooth={true} offset={-62} duration={200} className="nav-link">
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>:""}
                </AnimatePresence>
            </div>
          </div>
          <div className="col-lg-1 col-md-3 col text-end">
            <div className="large-screens">
              <FiMenu cursor="pointer" onClick={()=>{setNavbar(!navbar)}} size={40} />
            </div>
            <div className="small-screens">
              <FiMenu cursor="pointer" onClick={onOpen} size={40} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    <DrawerContext.Provider value={{isOpen, onOpen, onClose}}>
      <Menu/>
    </DrawerContext.Provider>
    </>
  );
};
export default Navbar