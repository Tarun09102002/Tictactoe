import React, { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import StartNewPlayer1 from "./pages/StartNewPlayer1";
import StartNewPlayer2 from "./pages/StartNewPlayer2";
import TicTacToe from "./pages/TicTacToe";
export const player1Context = React.createContext();
export const player2Context = React.createContext();
export const roomContext = React.createContext();
function App() {
  const [player1, setPlayer1] = useState({ name: "" });
  const [player2, setPlayer2] = useState({ name: "" });
  const [roomId, setRoomId] = useState({ name: "" });
  return (
    <div>
      <player1Context.Provider value={{ player1: player1, setPlayer1: setPlayer1 }}>
        <player2Context.Provider value={{ player2: player2, setPlayer2: setPlayer2 }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/playerinfo" element={<StartNewPlayer1></StartNewPlayer1>}></Route>
            <Route path="/tictactoe" element={<TicTacToe></TicTacToe>}></Route>
          </Routes>
        </player2Context.Provider>
      </player1Context.Provider>
    </div >
  );
}

export default App;
