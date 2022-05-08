import logo from './portfolio-svgrepo-com.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Portfolio</h4>
        <a className="App-link" href="#" target="_blank" rel="noopener noreferrer">About</a>
        <a className="App-link" href="#" target="_blank" rel="noopener noreferrer">Work Examples</a>
        <a className="App-link" href="#" target="_blank" rel="noopener noreferrer">Contact Information</a>
      </header>
    </div>
  );
}

export default App;
