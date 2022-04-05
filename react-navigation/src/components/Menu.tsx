import { Link } from 'react-router-dom'

export const Menu: React.FC<{}> = (props) => {
    return (
        <div className = 'menu'>
            <Link className='menuLink' to="/">Home</Link>  |  <Link className='menuLink' to="/param/15">Filmes</Link>  |   <Link className='menuLink' to="/query?name=MeuNome">Séries</Link>  |  <Link className='menuLink' to="/about">Contato</Link>
        </div>
    )
}