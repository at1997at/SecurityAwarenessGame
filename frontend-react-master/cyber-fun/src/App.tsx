import React from "react";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LevelOne from "./level-one/LevelOne";
import LevelTwo from "./level-two/LevelTwo";
import LevelThree from "./level-three/LevelThree";
import Footer from "./header/Footer";
import Header from "./header/Header";
import Help from "./help/Help";
import Wiki from "./wiki/Wiki";
import NotFoundPage from "./not-found/NotFoundPage";

function App() {
    return (
        <>
            <BrowserRouter>
                {/*  Header  */}
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/level-one" element={<LevelOne/>}/>
                    <Route path="/level-two" element={<LevelTwo/>}/>
                    <Route path="/level-three" element={<LevelThree/>}/>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/wiki" element={<Wiki/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                {/*  Footer  */}
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
