import styles from './Links.module.css';
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const MenuLink = ({children, to}) => {
    // eslint-disable-next-line
    const localizacao = useLocation()
    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    },[localizacao.pathname])
    return (
        <Link to={to} className={`${styles.link} ${localizacao.pathname === to? styles.linkDestacado: ''}`}>
            {children}
        </Link>
    )
}

export default MenuLink