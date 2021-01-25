import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NaviBar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NaviBar />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
