import Games from './pages/games';
import CreateGame from './pages/create-game';
import Header from './components/header';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path='/' element={<Games/>} />
          <Route exact path='/create-game' element={<CreateGame/>} />
        </Routes>
    </div>
  );
}

export default App;
