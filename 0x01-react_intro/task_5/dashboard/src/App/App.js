import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;