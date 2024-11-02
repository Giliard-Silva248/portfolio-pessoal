import { ProjectData, ProjectsData } from '../../data/ProjectsData'
import { FaExternalLinkAlt } from "react-icons/fa";
import * as S from './style'

interface ProjectsProps{
    pj: ProjectData
}


export const Projects: React.FC<ProjectsProps> = ({pj})=>{
    

    return(
        <S.Projects>
           {ProjectsData.map((pjs)=>(
                <div key={pjs.id}>
                <img src={pjs.img} alt="consulta cep" />
                <h4>{pjs.title}</h4>
                <a href={pjs.url} target="_blank" rel="noopener noreferrer">VISITAR <FaExternalLinkAlt /></a>
                </div>
           ))}
        </S.Projects>
    )
}