import './App.css';
import React from 'react';
import Cabecalho from './components/cabecalho/Cabecalho';
import Banner from './components/banner/Banner';
import BuscaCategoria from './components/buscaPorCategoria/BuscaCategoria';
import Produtos from './components/produtoBombando/Produtos';

import camisaJu from './components/buscaPorCategoria/imagens/camisaJu.png';
import bolsa from './components/buscaPorCategoria/imagens/bolsa.png';
import tenis from './components/buscaPorCategoria/imagens/tenis.png';
import calca from './components/buscaPorCategoria/imagens/calca.png';
import casaco from './components/buscaPorCategoria/imagens/casaco.png';
import oculos from './components/buscaPorCategoria/imagens/oculos.png';
import modelCami from './components/produtoBombando/imgProd/modelCami.jpg';

function App() {
  const infoCards = [
    {img: camisaJu , titulo: 'Camisetas'},
    {img: bolsa, titulo: 'Bolsas'},
    {img: tenis, titulo: 'Calçados'},
    {img: calca, titulo: 'Calças'},
    {img: casaco, titulo: 'Casacos'},
    {img: oculos, titulo: 'Óculos'},
  ]

  const infoprodutos = [
    {img: modelCami, titulo: 'Apenas um teste', descricao: 'ababababa abebebebeeb adadadadad', preco: 'R$ 50,00'},
  ]

  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
      <BuscaCategoria cards={infoCards}/>
      <Produtos cardsProd={infoprodutos}/>
    </div>
  );
}

export default App;
