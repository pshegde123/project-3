import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Genre from './components/pages/Genre';
import Platforms from './components/pages/Platforms';
import Games from './components/pages/Games';
import Footer from './components/pages/Footer';
import PlatformPage from './components/PlatformPage';
import GameDetails from './components/pages/GameDetails';

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/genre" component={Genre}/>
          <Route exact path="/platforms" component={Platforms}/>
          <Route exact path="/games" component={Games}/>
          <Route  path="/platformpage/:platform" component={PlatformPage}/>
          <Route  path="/game/:name/:id" component={GameDetails}/>
          <Footer/>
        </div>
      </Router>
  );
}
export default App;
