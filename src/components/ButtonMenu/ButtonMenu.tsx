import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt4  } from "react-icons/hi";
import * as S from './style';

export const ButtonMenu: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <S.Menu $toggle={toggle}>
        <div>
          <button onClick={() => setToggle(!toggle)}><IoMdClose /></button>
        </div>
        <div>
          <p>Sobre Mim</p>
          <p>Skills</p>
          <p>Projetos</p>
          <p>Contate-me</p>
        </div>
      </S.Menu>
      {!toggle && (
        <S.BtnMenu  onClick={() => setToggle(!toggle)}>
        
            <p>_________</p>
            <p>_________</p>
        </S.BtnMenu>
      )}
    </>
  );
};
