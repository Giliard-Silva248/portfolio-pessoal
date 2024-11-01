import * as S from './style'
import ft from '../../assets/img/1730488267938.jpeg'

export const Banner: React.FC = () =>{
    return(
        <S.Presentation>
            <span className='container'>
                <h2>DESENVOLVEDOR </h2>
                <h2 className='cssanimation typing sequencial'>
                     <span >FRONT__END</span>
                </h2>
            </span>
         
            <div>
                <img src={ft} alt="" />
                <p>Bem-Vindo!</p>
                <p>Disponível para Freelancer</p>
                <a href="">CONTATE-ME</a>
            </div>
        </S.Presentation>
    )
}