import './App.css';
import Game from './components/Game'
import Child from './components/Child'
import Adult from './components/Adult'
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/child/:mode" component={Child}/>
            <Route path="/adult/:mode" component={Adult}/>
            <Route path="/instructions" component={Instructions}/>
          </Switch>
        <Game/>
      </Router>
    </div>
  );
}

export default App;
