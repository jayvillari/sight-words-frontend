import "./App.css";
import Game from "./components/Game";
import Child from "./components/Child";
import Adult from "./components/Adult";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
//import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Game} />
          <Route path="/child/:mode" component={Child} />
          <Route path="/adult/:mode" component={Adult} />
          <Route path="/instructions" component={Instructions} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
