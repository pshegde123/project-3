import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Genre from './components/pages/Genre';
import Platforms from './components/pages/Platforms';
import Games from './components/pages/Games';

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/genre" component={Genre}/>
          <Route exact path="/platforms" component={Platforms}/>
          <Route exact path="/games" component={Games}/>
        </div>
      </Router>
  );
}
export default App;
