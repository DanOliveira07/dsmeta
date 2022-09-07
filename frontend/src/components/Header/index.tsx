import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="" />
                <h1>DS Meta</h1>
                <p>Desenvolvido por
                    <a href="https://github.com/DanOliveira07">@DanOliveira07</a>
                </p>
            </div>
        </header>
    )
}

export default Header
