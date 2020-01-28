import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Genre from './components/pages/Genre';
import Games from './components/Games'
function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/games" component={Games}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/genre" component={Genre}/>
        </div>
      </Router>
  );
}
export default App;
