import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProjectContainer from './components/ProjectContainer';
import AboutContainer from './components/AboutContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProjectContainer}/>
        <Route exact path="/about" component={AboutContainer}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
