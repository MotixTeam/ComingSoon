import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="App">
        <header className="App-header">
          <hr className="line"></hr>
          <img src={logo} className="App-logo" alt="logo"/>
          <p className="soon">
            Coming Soon!
          </p>
          <hr className="line"></hr>
        </header>
      </div>
    </>
  );
}

export default App;
