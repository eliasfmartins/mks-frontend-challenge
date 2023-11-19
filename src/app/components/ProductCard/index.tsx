import styled from "styled-components";
import { Buycar } from "./buycar";
import { useCarrinho } from "@/app/context/CarrContext";
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
    quantidade: number
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openCar, setOpenCar, itensCar, setItensCar } = useCarrinho();
  const handleAddItem = (novoItem: typeof itensCar[0]) => {
    const itemIndex = itensCar.findIndex(item => item.id === novoItem.id);

    if (itemIndex !== -1) {
      // Se o item já existe, aumente a quantidade
      const novoCarrinho = [...itensCar];
      novoCarrinho[itemIndex].quantidade += 1;
      setItensCar(novoCarrinho);
    } else {
      // Se o item não existe, adicione ao carrinho com quantidade 1
      setItensCar(prevItensCar => [...prevItensCar, { ...novoItem, quantidade: 1 }]);
    }
  };

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
      <div className="buy" onClick={() => handleAddItem(product)}>
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
  height: 120px;
  margin-bottom: 5px;
 }

`;



