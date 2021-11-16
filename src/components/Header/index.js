import './style.scss';

const Header = ({ empresa }) => {
    return (
        <>

            <header>
                <h1>{empresa}</h1>
                <nav>
                    <ul>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#lore">Lore</a></li>
                        <li><a href="#galeria-imagens">Skins</a></li>
                        <li><a href="#galeria-videos-spotlights">Spotlights</a></li>
                        <li><a href="#galeria-videos-montages">Montages</a></li>
                        <li><a href="#footer">Footer</a></li>
                    </ul>
                </nav>
            </header>
            


        </>
    )
}

export default Header;