import './App.css';
import Game from './components/Game'
import Child from './components/Child'
import Adult from './components/Adult'
import Controls from './components/Controls'

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Game/>
      <Child/>
      <Adult/>
      <Controls/>
    </div>
  );
}

export default App;
