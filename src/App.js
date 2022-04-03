import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Game from "./Components/TicTacToe/TicTacToe";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
