import '../styles/header.css'
import logo from '../assets/logo.png'

function Header(){
    const accueil = 'Accueil'
    const aPropos = "A Propos"

    
    return (
        <div className='kasa-header'>
            <img src={logo} alt='kasa' className='logo-principale' />
            <ul>
                <li>{accueil}</li>
                <li>{aPropos}</li>
            </ul>
        </div>
    )
}
export default Header