import Games from "./pages/games";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
