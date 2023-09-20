import React from "react";
import logo from "../Images/carrinhoLogo.svg"; // Substitua pelo caminho correto para o logo da loja
import cartIcon from "../Images/carrinhoLogo.svg"; // Substitua pelo caminho correto para o ícone do carrinho
import { Link } from "react-router-dom"; // Certifique-se de configurar suas rotas adequadamente
import "../Styles/Home.css";



function Home() {

  const products = [
    {
      id: 1,
      name: "Produto 1",
      price: 19.99,
      image: "product1.jpg", // Substitua pelo caminho correto para a imagem do produto
    },
    {
      id: 2,
      name: "Produto 2",
      price: 29.99,
      image: "product2.jpg",
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div>
      <header>
        <img width = "100" src={logo} alt="Logo da Loja" />
        <div>
          <Link to="" className="linkToLogin">Faça seu login / Cadastre-se</Link>
          <img width = "100" src={cartIcon} alt="Carrinho de Compras" />
        </div>
      </header>
      <main>
        <h1>Produtos Disponíveis</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Preço: R$ {product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`}>Detalhes</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
