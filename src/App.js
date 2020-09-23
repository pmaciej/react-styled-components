import React, {useRef} from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import About from './pages/About/About';
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
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div ref={homeRef} className="App">
 
      <BrowserRouter>
      <GlobalStyle />
      <Navbar refs={{ servicesRef, contactRef, productsRef, homeRef }} />
      <About />
        <Services ref={servicesRef} />
        <Products ref={productsRef} />
        <Footer {...Footer} ref={contactRef} />
      </BrowserRouter>
    </div>
  );
}


export default App;
