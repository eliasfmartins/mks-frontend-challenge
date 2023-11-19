import React from 'react'
import styled from 'styled-components'
import { Buycar } from './buycar'
import { useCarrinho } from '@/app/context/CarrContext'
interface ProductCardProps {
  product: {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
    quantidade: number
  }
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const { itensCar, setItensCar } = useCarrinho()
  const handleAddItem = (novoItem: typeof itensCar[0]) => {
    const itemIndex = itensCar.findIndex(item => item.id === novoItem.id)

    if (itemIndex !== -1) {
      const novoCarrinho = [...itensCar]
      novoCarrinho[itemIndex].quantidade += 1
      setItensCar(novoCarrinho)
    } else {
      if (itensCar.length >= 3) {
        window.alert('Você atingiu o limite de 3 produtos diferentes no carrinho.')
        return
      }

      setItensCar(prevItensCar => [...prevItensCar, { ...novoItem, quantidade: 1 }])
    }
  }

  return (
    <CardContainer key={product.id}>
      <CardContent>
        <img src={product.photo} alt="Produto" />
        <div>
          <div className="info">
            <div>

              <h2>{product.brand}&nbsp;
                {product.name}

              </h2>
            </div>
            <div className="price">{`${parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
            </div>
          </div>
          <p>{product.description}</p>
        </div>
      </CardContent>
      <div className="buy" onClick={() => { handleAddItem(product) }}>
        <Buycar /> COMPRAR
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
box-shadow: 0px 2px 8px 0px #00000022;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
transition: 0.6s;
border-radius: 8px;
  width: 217.56px;
  height: 285px;
&:hover{
scale: 1.1;
}
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
`

const CardContent = styled.div`
padding: 5px;

display: flex;
align-items: center;
flex-direction: column;
p{
  font-size: 10px;
  margin-top: 5px;
  padding: 5px;
}
h2{
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 1px;
  width: 110px;
  ;
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
  margin-left: 10px;

}
img{
  max-width: 148px;
  height: 120px;
  margin-bottom: 5px;
 }

`
