import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
/*components*/
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Accommodation from './Accommodation';
import Gallery from './Gallery'
import Projects from './Projects'
import Transport from './Transport'

function App() {
  return (
    <Router>
        <div> 
              <header>
                  <Header />
              </header>
            <Switch>
               <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/accommodation">
                  <Accommodation />
                </Route>
                <Route path="/gallery">
                  <Gallery />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/transport">
                  <Transport />
                </Route>
                <Route path="/">
                     <Main />
                    <footer>
                      <Footer />
                   </footer>
                </Route>
            </Switch>
         </div>
      </Router>
      
    
    
  );
}

export default App;
