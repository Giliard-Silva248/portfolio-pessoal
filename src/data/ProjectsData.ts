import consultaCepImg from '../assets/projectsImg/consultaCep.png';
import costureirasDoBairroImg from '../assets/projectsImg/costureirasDoBairro.png'
import huddleImg from '../assets/projectsImg/huddle.png'
import linksSociais from '../assets/projectsImg/linksSociais.png'
import myShop from '../assets/projectsImg/myShop.png'
import pagePsi from '../assets/projectsImg/pagePsi.png'
import myCoin from '../assets/projectsImg/myCoin.png'
import photographer from '../assets/projectsImg/photographer.png'

export interface ProjectData{
    id: number,
    img: string,
    title: string,
    url: string,    
}


export const ProjectsData:ProjectData[] = [
    {
        "id": 1,
        "img": pagePsi,
        "title": "Psi. Luana Ribeiro",
        "url": "https://giliard-silva248.github.io/lpage-psc/"
    },
    {
        "id": 2,
        "img": myCoin,
        "title": "My Coin",
        "url": "https://mycoinview.netlify.app/"
    },
    {
        "id": 3,
        "img": photographer,
        "title": "Arte em Cada Clique",
        "url": "https://giliard-silva248.github.io/photographer/"
    },
    {
        "id": 4,
        "img": consultaCepImg,
        "title": "Consulta Cep",
        "url": "https://giliard-silva248.github.io/consulta_cep/"
    },
    {
        "id": 5,
        "img": costureirasDoBairroImg,
        "title": "Costureiras do Bairro",
        "url": "https://giliard-silva248.github.io/costureiras-do-bairro/"
    },
    {
        "id": 6,
        "img": huddleImg,
        "title": "Huddle | Front-end Mentor",
        "url": "https://giliard-silva248.github.io/huddle/"
    },
    {
        "id": 7,
        "img": linksSociais,
        "title": "Links Sociais | Front-end Mentor",
        "url": "https://giliard-silva248.github.io/links-sociais/"
    },
    {
        "id": 8,
        "img": myShop,
        "title": "MyShop.com",
        "url": "https://giliard-silva248.github.io/ecommerce/"
    },


]