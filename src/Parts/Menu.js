import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-scroll";
import { DrawerContext} from "../components/Navbar";

const links = [{name:"HOME",link:"hero"}, {name:"ABOUT",link:"about"}, {name:"SERVICES",link:"services"}, {name:"PROJECTS",link:"projects"}, {name:"TESTIMONIALS",link:"testimonials"}, {name:"CONTACT",link:"contact"}];

function Menu() {
  const { 
    isOpen, onClose
    } = useContext(DrawerContext);
  return (
    <>
      <Drawer
      placement={"top"} onClose={onClose} isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="app-logo" borderBottomWidth="1px" color="#6252a1">Hasnain</DrawerHeader>
          <DrawerBody>
          <ul className="menu-ul">
                {links.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link to={item.link}  activeClass="active-link" onClick={onClose} spy={true} smooth={true} offset={-62} duration={200} className="nav-link">
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Menu;
