import PostModelo from "Componentes/Post-Modelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"
import minhaFoto from "../../assets/minha-foto.jpeg"
import styles from "./Sobre.module.css"
const Sobre = () => {
    return (
        <PostModelo thisPost={false} fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu Sou Pedro Antônio
            </h3>
            <div className={styles.fotoSobreMim} style={{ backgroundImage: `url(${minhaFoto})` }}>
            </div>

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Desenvolvedor Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Desde Minha infância, pois eu sempre fui apaixonado por tecnologia. Aos 14 anos ja estava me descobrindo nesse gigantesco mundo da programação. Aos 15 Anos eu entrei para curso técnico em Eletrotécnica e descobri a programação de baixo nível, onde aprendi a programar em C e Ladder.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Analise e Desenvolvimento de Sistemas na Universidade de Fortaleza (UNIFOR).
            </p>
            <p className={styles.paragrafo}>
                Atualmente estou realizando o curso de Front-End na Alura com parceria da Oracle, no projeto Oracle Next Education(ONE), e realizando meu curso de Ensino superior.
            </p>
            <p className={styles.paragrafo}>
                Minha jornada no Front-End começou em 2023, quando decidi aprender a programar em JavaScript é React, Graças aos meus conhecimento previos em outras linguagens não foi tão dificil me adaptar com tais tecnologias.
            </p>
            <p className={styles.paragrafo}>
                Graças ao meu estágio na empresa Tijuca Alimentos eu pude aprimorar meus conhecimentos em React e JavaScript, e também aprender a trabalhar em equipe.
            </p>
        </PostModelo>
    )
}

export default Sobre