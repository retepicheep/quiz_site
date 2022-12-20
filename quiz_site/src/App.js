import Header from "./components/Header";
import Login from "./components/Login"
import './App.css';

let loginSuccessful = false

function App() {
  if (loginSuccessful === true){
    return (
      <div className="App">
        <Header title = "Quapp"/>
      </div>
    );
  }
  if (loginSuccessful === false){
    return (
      <div className = "App">
        <Header title = "Quapp"/>
        <Login/>
      </div>
    );
  }
}

export default App;
