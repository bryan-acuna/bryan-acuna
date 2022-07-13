import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Styles from "./components/styles/Styles";
import User from "./components/user/User";
import MainPokedex from "./components/pokedex/MainPokedex";
import ToDoList from "./components/todolist/ToDoList";
import NoteTaking from "./pages/NoteTaking/NoteTaking";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Weather from "./pages/Weather/Weather";
import Homepage from "./pages/Home/Homepage";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Food from "./pages/Food/Food";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pro" element={<Home />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/user" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="pokemon" element={<MainPokedex />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="notes" element={<NoteTaking />} />
          <Route path="weather" element={<Weather />} />
          <Route path="food" element={<Food />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
