import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import * as S from './style';

export const ButtonMenu: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? (
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
      ) : (
        <S.StyledWrapper>
          <button className="btn-12" onClick={() => setToggle(!toggle)}>
            <span>Menu</span>
          </button>
        </S.StyledWrapper>
      )}
    </>
  );
};
