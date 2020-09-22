import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button }  from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';




const Navbar = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/services":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "/products":
        scrollSmoothHandler(refs.heroRef);
        break;
        case "/sign-up":
          scrollSmoothHandler(refs.contactRef);
          break;  

      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);
 
  const scrollSmoothHandler = ref => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
 
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);






  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to='/services'>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to='/products'>
                Products
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
              <NavBtnLink smooth to="/sign-up">
                <Button primary>SIGN UP</Button>
              </NavBtnLink>
              ) : (
                <NavBtnLink smooth to="/sign-up">
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
      
    </>
  )
}

export default Navbar
