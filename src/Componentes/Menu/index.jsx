import styles from './Menu.module.css'
import MenuLink from '../Menu-Link'
const Menu = () => {



    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/sobre">Sobre</MenuLink>
            </nav>
        </header>
    )
}
export default Menu