import styled from "styled-components";

export const Projects = styled.section`

    max-width: 1400px;
    padding: 5rem 1rem;
    margin: 0 auto;
    color: aliceblue;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;


    div{
        
        padding: 1rem ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h4{
            padding: .8rem 0;
            font-size: 1.4rem;
            text-decoration: underline;
        }
        img{
            width: 30rem;
            max-width: 100%;
            border-radius: 5px;
        }
        a{  
            width: 8rem;
            text-decoration: none;
            padding: .5rem 1rem;
            background: #BA274A;
            color:#F6FAF9;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
            font-size: .9rem;
            transition: all .4s;

            &:hover{
                background: #FDBA74;
                color: #0A0A0A;
            }
        }
    }
`