import { Container } from './styled'
import { useEffect, useState } from "react"

import { Link } from 'react-router-dom'

import Cookie from 'js-cookie'
import CarrinhoItem from './CarrinhoItem'

export default function Carrinho() {
    const [produto, Setproduto] = useState ([]);



    useEffect(carregarCarrinho, []);



    function carregarCarrinho() {

        let Carrinho = Cookie.get('carrinho');
        Carrinho = Carrinho !== undefined
                   ? JSON.parse(Carrinho)
                   : [];

        console.log(Carrinho);

    
        Setproduto(Carrinho);
    }


    function removerProduto(id) {
        let carrinho = produto.filter(item => item.id !== id);

        Cookie.set('carrinho', JSON.stringify(carrinho));

        Setproduto([...carrinho]);
    }


    function alterarProduto(id, qtd){
         let produtoAlterado = produto.filter(item => item.id === id) [0];
         produtoAlterado.qtd = qtd;


         Cookie.set('carrinho', JSON.stringify(produto));
    
    }

    return (
        <Container>
            <h1> Carrinho </h1>

            <Link to= "/"> Voltar</Link>

        <div className= "itens">
            {produto.map(item =>
              <CarrinhoItem key= {item.id}   
                info= {item}
                onUpdate={alterarProduto}
                onRemove={ removerProduto} /> 
            )}

            </div>

            </Container>
    )
}