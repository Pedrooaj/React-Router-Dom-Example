import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
const Banner = () => {
    /* eslint-disable */ 
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Recrutadores e afins!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Pedro Antônio, Desenvolvedor. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true} />
                <img 
                className={styles.minhaFoto} 
                src="https://avatars.githubusercontent.com/u/133423641?v=4"
                alt='Pedro Antônio'
                />
            </div>
        </div>
    )
}
export default Banner