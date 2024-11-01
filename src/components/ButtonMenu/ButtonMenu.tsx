import React, { useState } from 'react';
import * as S from './style';

export const ButtonMenu: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? (
        <S.Menu $toggle={toggle}>
          <button onClick={() => setToggle(!toggle)}>opa</button>
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
