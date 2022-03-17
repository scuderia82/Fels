import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
/*components*/
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Accommodation from './components/Accommodation';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Transport from './components/Transport';
import Machine from './components/Machine';
import Subscribe from './components/Subscribe';
import Actual from './components/Actual';
// import Title from './Title';
import Production from './components/Production';
import Office from './components/Office';
import Login from './components/Login';

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
                <Route path="/machine">
                  <Machine />
                </Route>
                <Route path="/actual">
                  <Actual />
                </Route>
                <Route path="/production">
                  <Production />
                </Route>
                <Route path="/office">
                  <Office />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                     <Main />
                     <Subscribe />
                </Route>
            </Switch>
            <footer>
                       <Footer />
                    </footer>
         </div>
      </Router>
      
    
    
  );
}

export default App;
