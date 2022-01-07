import React from "react";
import ListaCategorias from "../componentes/ListaCategorias";
import ListaPost from "../componentes/ListaPost";

const Home = () => {
    return(
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ListaPost url={'/posts'} />
        </main>
    );
}

export default Home;