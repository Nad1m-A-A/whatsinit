import React from "react";
import Header from '../components/header/Header';
import Board from '../components/board/Board';
import Intro from '../components/header/Intro';
import Navigation from '../components/header/Navigation';
import Line from "../components/layout/Line";
function Home() {
    return (
        <div>
        <Header>
            <Navigation />
            <Intro />
        </Header>
        <Line/>
        <Board />
        </div>
    );
}

export default Home;
