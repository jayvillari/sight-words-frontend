import './App.css';
import Game from './components/Game'
import Child from './components/Child'
import Adult from './components/Adult'
import Controls from './components/Controls'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/'/>
          </Switch>
        <Game/>
        <Child/>
        <Adult/>
      </Router>
      <Controls/>
    </div>
  );
}

export default App;
