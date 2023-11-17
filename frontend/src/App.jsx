import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;