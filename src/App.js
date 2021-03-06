import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProjectContainer from './components/ProjectContainer';
import AboutContainer from './components/AboutContainer';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Welcome from './components/Welcome';

function App() {

  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/projects" component={ProjectContainer}/>
        <Route exact path="/about" component={AboutContainer}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
