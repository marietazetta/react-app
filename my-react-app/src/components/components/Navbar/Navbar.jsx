import './Navbar.css'
import lasbitxas from './../../../assets/lasbitxas.png'


const Navbar = () => {

    return (
        <header className='Navbar'>
            <img src={lasbitxas} alt="Logotipo" />

            <nav>
                <h1>LAS BITXAS</h1>
            </nav>
        </header>
    )
}

export default Navbar