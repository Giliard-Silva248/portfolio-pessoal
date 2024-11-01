import styled from 'styled-components';

export const StyledWrapper = styled.div`
  /* From Uiverse.io by doniaskima */
  .btn-12,
  .btn-12 *,
  .btn-12 :after,
  .btn-12 :before,
  .btn-12:after,
  .btn-12:before {
    border: 0 solid;
    box-sizing: border-box;
  }
  .btn-12 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-12:disabled {
    cursor: default;
  }
  .btn-12:-moz-focusring {
    outline: auto;
  }
  .btn-12 svg {
    display: block;
    vertical-align: middle;
  }
  .btn-12 [hidden] {
    display: none;
  }
  .btn-12 {
    border-radius: 99rem;
    border-width: 2px;
    overflow: hidden;
    padding: 0.8rem 3rem;
    position: relative;
  }
  .btn-12 span {
    mix-blend-mode: difference;
  }
  .btn-12:after,
  .btn-12:before {
    background: linear-gradient(90deg, #fff 25%, transparent 0, transparent 50%, #fff 0, #fff 75%, transparent 0);
    content: "";
    inset: 0;
    position: absolute;
    transform: translateY(var(--progress, 100%));
    transition: transform 0.2s ease;
  }
  .btn-12:after {
    --progress: -100%;
    background: linear-gradient(90deg, transparent 0, transparent 25%, #fff 0, #fff 50%, transparent 0, transparent 75%, #fff 0);
    z-index: -1;
  }
  .btn-12:hover:after,
  .btn-12:hover:before {
    --progress: 0;
  }

`;

export const Menu = styled.section<{ $toggle: boolean }>`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  position: absolute;
  background: #BA274A;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



  div:nth-of-type(1){
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

    button{
      border: none;
      cursor: pointer;
      
      svg{
        border: none;

      }
    }
  }
  div:nth-of-type(2){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    flex-grow: 3;
    font-size: 3rem;

    p{
      transition: color .5s;
      &:hover{
      color: #0A0A0A;

    }
    }
    

    
  }
`;
