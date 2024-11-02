import React from 'react';
import * as S from './styles/App'
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { ProjectsData } from './data/ProjectsData';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <S.ContainerApp>
      <NavBar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects pj={ProjectsData[0]} />
      <Footer/>
    </S.ContainerApp>
  );
}

export default App;
