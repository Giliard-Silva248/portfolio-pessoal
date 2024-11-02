import consultaCepImg from '../assets/projectsImg/consultaCep.png';
import costureirasDoBairroImg from '../assets/projectsImg/costureirasDoBairro.png'
import huddleImg from '../assets/projectsImg/huddle.png'
import linksSociais from '../assets/projectsImg/linksSociais.png'

export interface ProjectData{
    id: number,
    img: string,
    title: string,
    url: string,    
}


export const ProjectsData:ProjectData[] = [
    {
        "id": 1,
        "img": consultaCepImg,
        "title": "Consulta Cep",
        "url": "https://giliard-silva248.github.io/consulta_cep/"
    },
    {
        "id": 2,
        "img": costureirasDoBairroImg,
        "title": "Costureiras do Bairro",
        "url": "https://giliard-silva248.github.io/costureiras-do-bairro/"
    },
    {
        "id": 3,
        "img": huddleImg,
        "title": "Huddle | Front-end Mentor",
        "url": "https://giliard-silva248.github.io/huddle/"
    },
    {
        "id": 4,
        "img": linksSociais,
        "title": "Links Sociais | Front-end Mentor ",
        "url": "https://giliard-silva248.github.io/links-sociais/"
    },

]