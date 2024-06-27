import styles from "./Inicio.module.css"
import posts from 'json/posts.json'
import PostCard from "Componentes/Post-Card"

const Inicio = () => {
    return(
            <ul className={styles.posts}>
                {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
                }
            </ul>
    )
}

export default Inicio