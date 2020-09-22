import React, {useRef} from 'react';
import GlobalStyle from './globalStyles';
import { HashRouter} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products'
import ScrollToTop from './components/ScrollToTop';

// function App() {

 


//   return (
//     <Router>
//       <GlobalStyle />
//       <ScrollToTop />
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route exact path="/services/"  component={Home} />
//         <Route path="/products" exact component={Products} />
//         <Route path="/sign-up" exact component={Home} />
//       </Switch>
//     </Router>
//   );
// }


function App() {
  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div ref={homeRef} className="App">
 
      <HashRouter>
      <GlobalStyle />
      <Navbar refs={{ aboutRef, contactRef, heroRef, homeRef }} />
        <Home ref={aboutRef} />
        <Products ref={heroRef} />
        <Footer {...Footer} ref={contactRef} />
      </HashRouter>
    </div>
  );
}


export default App;
