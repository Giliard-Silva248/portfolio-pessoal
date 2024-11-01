import styled from 'styled-components';

export const BtnMenu = styled.button`
    background: transparent;
    border: none;
    color: #F6FAF9;
    cursor: pointer;
    p{
      line-height: 0.5rem;
      font-size: 1.1rem;
      font-weight: bold;
    }
  
`;

export const Menu = styled.section<{ $toggle: boolean }>`
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  position: absolute;
  background: #BA274A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ $toggle }) => ($toggle ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.5s ease;

  div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

    button {
      border: none;
      cursor: pointer;
      background: transparent;
      width: 5rem;
      svg{
        font-size: 4rem;
        border: none;
        color: #F6FAF9;
      }
    }
  }
  
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    flex-grow: 3;
    font-size: 3rem;

    p {
      transition: color 0.5s;
      &:hover {
        color: #0A0A0A;
      }
    }
  }
`;
