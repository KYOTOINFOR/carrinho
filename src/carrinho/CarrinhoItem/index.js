
import {useState} from 'react';
import { Container, RemoverIcon} from './styled'

export default function CarrinhoItem(props) {
   const [ produto, SetProduto] = useState (props.info);

function alterarQtd (qtd) {
    SetProduto ({...produto, qtd });

    props.OnUpdate(produto.id, qtd)
}

 function remover() {
     props.OnRemove(produto.id);
 }

 return (
     <Container>
     
     <div>
       <img className= "capa" src= { produto.imagem} alt= ""/>
       <contador onChange= {alterarQtd} value= {produto.qtd}/>
     </div>

     <div className="titulo"> 
        {produto.titulo}
     </div>

     <div className= "preco">
      <span> Preço unitario </span> <br />
         {produto.preco}
     </div>

     <div className= "qtd">
     <span>Qtd</span> <br />
         {produto.qtd}
     </div>

     <div className= "remover"> <RemoverIcon onClick={remover} /> </div>
 
     </Container>

     )
 }
 
       