import PostCard from 'Componentes/Post-Card';
import styles from './PostModelo.module.css';
import posts from 'json/posts.json';

export default function PostModelo({ fotoCapa, titulo, children, thisPost = true}) {
  var postRecomendados = posts.filter((post) => post.titulo !== titulo)
  .sort((a,b) => b.id - a.id)
  .slice(0, 4)
  return (
    <article className={styles.PostModeloContainer}>
      <div className={styles.FotoCapa} style={{ backgroundImage: `url(${fotoCapa})` }}>
      </div>
      <h2 className={styles.Titulo}>{titulo}</h2>
      <div className={styles.PostConteudoContainer}>{children}</div>
      {
      thisPost === true ? 
      <div className={styles.postRecomendados}>
        <h1>Outros Posts que você pode gostar:</h1>
        <div className={styles.posts}>
          {postRecomendados.map((post) => {
            return <PostCard key={post.id} post={post} />
          })}
        </div>
      </div> 
      : null}
    </article>
  )

}