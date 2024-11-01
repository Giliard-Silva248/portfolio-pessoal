import React from 'react';
import * as S from './styles/App'
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <S.ContainerApp>
      <NavBar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
    </S.ContainerApp>
  );
}

export default App;
