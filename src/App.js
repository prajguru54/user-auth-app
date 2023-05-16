import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import AllUsers from './components/AllUsers'
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
            <li>
              <Link to="/auth/users">All Users</Link>
            </li>
          </ul>
        </nav>
            <Routes>
                <Route path="/auth/register" element={<Register />} />
                <Route path="/" element={<Register />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/users" element={<AllUsers />} />
            </Routes>
        </>
    );
};

export default App;
