import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import Logo from '../../assets/logo.png'
import './styles.css'

export const Header = () => {
    return ( 
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo Xubooks" />
                <p>Xu<span>BOOKS</span></p>
            </div>
            <div className="container-search">
                <div className='content-search'>
                    <AiOutlineSearch />
                    <input type="text" />
                </div>
            </div>
            <nav className="nav">
                <ul className="content-links">
                    <li className="link active"><Link to="/">Obras</Link></li>
                    <li className="link"><Link to="quiz">Quiz</Link></li>
                    <li className="link"><Link to="team">Equipe</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 