import styled from "styled-components";
import { Buycar } from "./buycar";
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer key={product.id}>
      <CardContent>
        <img src={product.photo} alt="Produto" />
        <div>
          <div className="info">
            <h2>{product.brand}</h2>
            <div className="price">{`R$${product.price}`}</div>
          </div>
          <p>{product.description}</p>
        </div>
      </CardContent>
      <div className="buy">
        <Buycar /> COMPRAR
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
box-shadow: 0px 2px 8px 0px #00000022;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-radius: 8px;
  width: 217.56px;
  height: 285px;

 .buy{
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 31.91px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  background: #0F52BA;
  width: 100%;
  justify-content: center;
  border-radius: 0 0 8px 8px;
  
}
`;

const CardContent = styled.div`
padding: 15px;

display: flex;
align-items: center;
flex-direction: column;
p{
  font-size: 10px;
  margin-top: 5px;
}
h2{
  font-weight: 400;
  font-size: 16px;
}
.info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price{
  background: #373737;
  padding: 5px;
  color: white;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;

}
img{
  max-width: 148px;
  max-height: 138px;
  margin-bottom: 5px;
 }

`;

const Icon = styled.div`
  // Adicione estilos conforme necessário para o ícone de compra
`;

