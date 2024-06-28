import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './common/layout/Layout';
import { Home } from './pages/home/Home';
import {MobilePhone} from "./pages/categories/mobile-phone/MobilePhone";
import {Accessories} from "./pages/categories/accessories/Accessories";
import {Compare} from "./pages/compare/Compare";
import {Basket} from "./pages/basket/Basket";
import {Login} from "./pages/auth/login/Login";
import {SignUp} from "./pages/auth/sign-up/SignUp";


function App() {
    return (
        <div className="App bg-dark">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/category">
                        <Route path="phones" element={<MobilePhone/>}/>
                        <Route path="accessories" element={<Accessories/>}/>
                    </Route>
                    <Route path="/compare" element={<Compare/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Route>
                <Route path="/login" element={<Login/>} />
                <Route path="/sign-up" element={<SignUp/>} />

            </Routes>
        </div>
    );
}

export default App;
