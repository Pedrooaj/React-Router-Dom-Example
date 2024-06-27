<h1 align="Center">Olá este Meu Projeto tem Base em Create React App ⚛️</h1>
<h2  align="Center">Esta Aplicação tem intenção de aprendizado na biblioteca React-Router-Dom</h2>
<h3>Conceitos Básicos Usados:</h3>
<ul>
  <h2>Hooks Usados:</h2>
  <li>useParams: E um hook retorna um objeto de pares chave/valor dos parâmetros dinâmicos da URL atual que foram correspondidos pelo <Route path>. As rotas filhas herdam todos os parâmetros das rotas pai.</li>
  <li>useLocation: Este hook retorna o location objeto atual. Isso pode ser útil se você quiser executar algum efeito colateral sempre que o local atual mudar.</li>
  <li>useNavigate: E um hook retorna uma função que permite navegar programaticamente, por exemplo, em um efeito.</li>
  <h2>Tags Usadas:</h2>
    <li>Outlet: Outlet deve ser usado em elementos de rota pai para renderizar seus elementos de rota filho. Isso permite que a UI aninhada apareça quando as rotas secundárias são renderizadas. Se a rota pai corresponder exatamente, ela renderizará uma rota de índice filho ou nada se não houver rota de índice.</li>
  <li>Link: A Link é um elemento que permite ao usuário navegar para outra página clicando ou tocando nela. Em react-router-dom, a <Link>renderiza um <a>elemento acessível com um real hrefque aponta para o recurso ao qual ele está vinculando. Isso significa que coisas como clicar com o botão direito em <Link>funcionam como você esperaria. Você pode usar <Link reloadDocument>para pular o roteamento do lado do cliente e deixar o navegador lidar com a transição normalmente (como se fosse um <a href>).</li>
</ul>
