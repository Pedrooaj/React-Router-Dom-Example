import { useParams } from "react-router-dom";
import posts from 'json/posts.json'
import PostModelo from "Componentes/Post-Modelo";
import ReactMarkDown from "react-markdown";
import "./post.css"
import NaoEncontrada from "Paginas/Nao-Encontrada";
import Banner from "Componentes/Banner";

const Post = () => {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })
    if (!post) {
        return <NaoEncontrada />
    } else {
        return (
            <>
            <Banner />
            <PostModelo
                scrollToTop={true}
                fotoCapa={`/posts/${post.id}/capa.png`}
                titulo={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkDown>
                        {post.texto}
                    </ReactMarkDown>
                </div>
            </PostModelo>
            </>
        )
    }
}

export default Post