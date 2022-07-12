import logo from '../../assets/img/logo.2.png';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="l2meta-logo-container" >
            <img src={logo} alt="Imagem Logo" />
            <h1>L2 Meta</h1>
            <p>Desenvolvido por <a href="https://www.instagram.com/lucas_l2oliveira/">@lucas_l2oliveira</a></p>
        </div>
    </header >
    
    )
}

export default Header