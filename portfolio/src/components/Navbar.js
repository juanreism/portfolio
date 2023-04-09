import styles from './Navbar.modules.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Navbar(){
    return(
        <div className="navbar"> 
            <div className="icon"> <p><FaLinkedinIn size ='30px'/>     
             <FaGithub size ='30px'/></p></div>
            <div className="links">
                <p>Quem sou eu</p>
                <p>Projetos</p>
                <p>Fale comigo</p>
            </div>
        </div>
    )
}

export default Navbar