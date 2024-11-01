import React from 'react';
import * as S from './styles/App'
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';

function App() {
  return (
    <S.ContainerApp>
      <NavBar/>
      <Banner/>
      <AboutMe/>
    </S.ContainerApp>
  );
}

export default App;
