import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          </ul>
        </nav>
            <Routes>
                <Route path="/auth/register" element={<Register />} />
                <Route path="/" element={<Register />} />
                <Route path="/auth/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;
