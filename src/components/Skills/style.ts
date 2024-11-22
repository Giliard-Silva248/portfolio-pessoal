import styled from "styled-components";

export const Tech = styled.section`


        height: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        margin: 0 auto;
    


    .swiper{

        width: 100%;
        margin: 0 .5rem;
        padding: 1rem 0;
        text-align: center;
        height: 100%;
        background: rgba( 186, 39, 74, 0.3 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 5px );
        -webkit-backdrop-filter: blur( 5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );


    }
    .swiper-slide{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bolder;
        gap: 1rem;
        text-shadow: 0 6px 20px #0A0A0A;
        svg{
            font-size: 2rem;
        }
        
    }
    .swiper-slide:nth-of-type(1) svg{
        color: #E44D26;
    }
    .swiper-slide:nth-of-type(2) svg{
        color: #379AD6;
    }
    .swiper-slide:nth-of-type(3) svg{
        color: #F7DF1E;
    }
    .swiper-slide:nth-of-type(4) svg{
        color: #3178C6;
    }
    .swiper-slide:nth-of-type(5) svg{
        color: #58C4DC;
    }
    .swiper-slide:nth-of-type(6) svg{
        color: #3178C6;
    }
    .swiper-slide:nth-of-type(7) svg{
        color: #3178C6;
    }
    .swiper-slide:nth-of-type(8) svg{
        color: #A158FE;
    }

`