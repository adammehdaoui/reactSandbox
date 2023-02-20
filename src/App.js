import logo from './components/assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header App-background">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutoriel React
        </a>
      </header>
    </div>
  );
}

export default App;
