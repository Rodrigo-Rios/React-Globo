import './Menu.css';


export const Menu: React.FC<{}> = (props) => {
    return (


        <nav className='menu'>

            <ul>
               
                <li>
                    <a href="/" >Home</a>
                </li>

                <li>
                    <a href="/films">Filmes</a>
                </li>

                <li>
                    <a href="/series">Séries</a>
                </li>
                <li>
                    <a href="/about">Contato</a>
                </li>

            </ul>
        </nav>



    )
}