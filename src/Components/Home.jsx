import React from "react";
import logo from "../Images/pirataIcon.svg"; // Substitua pelo caminho correto para o logo da loja
import cartIcon from "../Images/carrinhoLogo.svg"; // Substitua pelo caminho correto para o ícone do carrinho
import { Link } from "react-router-dom"; // Certifique-se de configurar suas rotas adequadamente
import "../Styles/Home.css";



function Home() {

  const products = [
    {
      id: 1,
      name: "Produto 1",
      price: 19.99,
      image: "https://a-static.mlcdn.com.br/450x450/cinzeiro-de-mesa-caveira-pirata-willy-caolho-versare-anos-dourados/versareanosdourados/423401/efe241438946a711cf22cac84449b76e.jpeg", // Substitua pelo caminho correto para a imagem do produto
    },
    {
      id: 2,
      name: "Produto 2",
      price: 29.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjbsLfVMezKvsUFxP2pmEb0OnzasfH-_h5w&usqp=CAU",
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div>
      <header className="header">
        <img width = "70" src={logo} alt="Logo da Loja" />
        <div className="divHeader">
          <Link to="" className="linkToLogin">Faça seu login</Link>
          <Link to="" className="linkToLogin"> Cadastre-se</Link>
          <img width = "50" src={cartIcon} alt="Carrinho de Compras" />
        </div>
      </header>
      <main className="sectionHero">
        <h1 className="title">Produtos Disponíveis</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img width="150" src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Preço: R$ {product.price.toFixed(2)}</p>
              <Link to={`/product`}>Detalhes</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
