import styled from "styled-components";

export const Presentation = styled.section`
    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: 90vh;
        padding: 3rem 0.5rem 1rem;

        
  
        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            flex-grow: 4;
            font-size: 1.6rem;
            padding: 0 .5rem;
            width: max-content;
            
            
        }
        
        
        .typing{        
            
            width: 100%;
            padding: 0 .1rem;
            
            animation: typing 4s steps(30, end), cursor .5s steps(12, end) infinite;

            span:hover{
                color: #FDBA74;
            }   
        }

        div{
            width: 100%;

            padding: 1rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            gap: .5rem;
            img{
                width: 10rem;
                margin: 1rem 0;
                
            }
            p{
                
                font-size: 1.2rem;
            }

            a{
                color: #FDBA74;
                font-size: 1rem;
            }
        }
`