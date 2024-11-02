import * as S from './style'
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { Time } from '../Time/Time';

export const NavBar: React.FC = () => {


    return(
        <S.NavBar>
            <h2>SILVA</h2>
            <ButtonMenu/>
            <Time/>
        </S.NavBar>
    )
}