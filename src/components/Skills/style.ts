import styled from "styled-components";

export const Tech = styled.section`


        height: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        margin: 0 auto;
    

    h3{
        width: 99%;
        border-left: 4px solid #FDBA74;
        padding: 0 .5rem;
        margin-bottom: 1rem;
        font-size: 1.6rem;
    }

    .swiper{

        width: 100%;
        margin: 0 .5rem;
        padding: 1rem 0;
        text-align: center;
        height: 100%;
        background: #BA274A;


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

`