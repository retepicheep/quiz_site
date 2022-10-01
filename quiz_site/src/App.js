import Header from "./components/Header";
import Login from "./components/login"
import './App.css';

let loginSuccessful = false

function App() {
  if (loginSuccessful === true){
    return (
      <div className="App">
        <Header title = "Quapp">
        </Header>
      </div>
    );
  }
  else{
    return (
      <div className = "App">
        <Header title = "Quapp">
          <Login/>
        </Header>
      </div>
    );
  }
}

export default App;
