import './App.css';
import React from 'react';
import Header from './header/header';
import Main from './main/main';
import Exp from './exp/exp';
import Footer from './footer/footer';
import Projects from './projects/projects';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import optionsParticles from './assets/particles/config';

function App() {

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <div className="App h-max bg-clair">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={optionsParticles}
      />
      <Header></Header>
      <Main></Main>
      <Exp></Exp>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
