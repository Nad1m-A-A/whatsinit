import React from 'react';
import './assets/styles/Main.module.css';
import Header from './components/header/Header';
import Board from './components/board/Board';
import classes from './assets/styles/Main.module.css';
function App() {
return (
    <div>
      <Header/>
      <section className={classes.board_section}>
        <Board/>
      </section>
    </div>
  );
}

export default App;