import logo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;