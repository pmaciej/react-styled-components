import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button }  from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink, Img } from './Navbar.elements';




const Navbar = ({ refs }) => {
  const location = useLocation();
  
  
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = (refs, location) => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
     

//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);
  
  
  useEffect(() => {
    console.log("location", location);
    switch (location.pathname) {
      case "/services":
        scrollSmoothHandler(refs.servicesRef);
      
        break;
      case "/products":
        scrollSmoothHandler(refs.productsRef);

        break;
        case "/sign-up":
          scrollSmoothHandler(refs.contactRef);

          break;  

      default:
        scrollSmoothHandler(refs.homeRef);
  
        break;
        
    }
  }, [location, refs]);

 
  const scrollSmoothHandler = refs => {
    console.log("Triggered.");
    refs.current.scrollIntoView({ behavior: "smooth" });
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
          <NavLogo smooth to="/" replace onClick={closeMobileMenu}>
          <Img src={require('../../images/ultra-logo3.png')} alt={"image"} />
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks smooth to='/' replace>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to='/services' replace>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to='/products' replace>
                Products
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
              <NavBtnLink smooth to="/sign-up" replace>
                <Button primary>SIGN UP</Button>
              </NavBtnLink>
              ) : (
                <NavBtnLink smooth to="/sign-up" replace>
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
