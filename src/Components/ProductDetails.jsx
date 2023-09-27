import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductDetails() {
  // Dados do produto (substitua com os dados reais)
  const product = {
    name: 'Produto Pirata',
    description: 'Este é um produto que somente piratas podem usar, vamos ver se você é digno! rsrs.',
    price: '$99.99',
    rating: 4.5,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjbsLfVMezKvsUFxP2pmEb0OnzasfH-_h5w&usqp=CAU',
      'https://a-static.mlcdn.com.br/450x450/cinzeiro-de-mesa-caveira-pirata-willy-caolho-versare-anos-dourados/versareanosdourados/423401/efe241438946a711cf22cac84449b76e.jpeg',
    ],
  };

  const [isCartEnabled, setCartEnabled] = useState(false);

  // Função para habilitar o botão de compra
  const enableCart = () => {
    // Lógica para habilitar o botão de compra (pode ser após o sprint do carrinho)
    setCartEnabled(true);
  };

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
      <p>Avaliação: {product.rating}</p>

      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <button
        onClick={enableCart}
        disabled={!isCartEnabled}
        className="buy-button"
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductDetails;
