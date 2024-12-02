import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
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

          <a href="www.linkedin.com/in/giliard-h-da-silva" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>
          <a href="https://github.com/Giliard-Silva248" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>
          <a href="mailto:ghssilva248@gmail.com"><MdOutlineMailOutline />Contate-me</a>
        </div>
      </S.Menu>
      {!toggle && (
        <S.BtnMenu  onClick={() => setToggle(!toggle)}>
        
            <p>____<MdOutlineKeyboardDoubleArrowDown />____</p>
            <p>_____</p>
            
        </S.BtnMenu>
      )}
    </>
  );
};
