import './App.css';
import React from 'react';
import Header from './header/header';
import Main from './main/main';
import Exp from './exp/exp';
import Projects from './projects/projects';

function App() {
  return (
    <div className="App h-max bg-clair">
    <Header></Header>
    <Main></Main>
    <Exp></Exp>
    <Projects></Projects>
    </div>
  );
}

export default App;
