import React, { useEffect, useState } from 'react'
import { useCarrinho } from '@/app/context/CarrContext'
import styled from 'styled-components'
import { CartItem } from '../CardCarrinho'
export const BuyCarr = () => {
  const { setOpenCar, itensCar, setItensCar } = useCarrinho()
  const [valorTotal, setValorTotal] = useState<number>(0)
  const [setQuantidadeItens] = useState<number>(0)

  useEffect(() => {
    // Atualizar o valor total e a quantidade de itens sempre que o carrinho for modificado
    calcularTotal()
  }, [itensCar])

  const handleRemoveItem = (id: number) => {
    // Filtrar os itens do carrinho para remover o item com o ID correspondente
    const novoCarrinho = itensCar.filter(item => item.id !== id)

    // Atualizar o estado do carrinho com o novo array
    setItensCar(novoCarrinho)
  }

  const handleIncreaseQuantity = (id: number) => {
    const novoCarrinho = [...itensCar]
    const itemIndex = novoCarrinho.findIndex(item => item.id === id)

    if (itemIndex !== -1) {
      novoCarrinho[itemIndex].quantidade += 1
      setItensCar(novoCarrinho)
      console.log('Novo estado do carrinho após aumento de quantidade:', novoCarrinho)
    }
  }

  const handleDecreaseQuantity = (id: number) => {
    const novoCarrinho = [...itensCar]
    const itemIndex = novoCarrinho.findIndex(item => item.id === id)

    if (novoCarrinho[itemIndex].quantidade > 1) {
      novoCarrinho[itemIndex].quantidade -= 1
    } else {
      novoCarrinho.splice(itemIndex, 1)
    }

    setItensCar(novoCarrinho)
  }

  const calcularTotal = () => {
    let total = 0
    let quantidade = 0

    itensCar.forEach(item => {
      total += parseFloat(item.price) * item.quantidade
      quantidade += item.quantidade
    })

    setValorTotal(total)
    setQuantidadeItens(quantidade)
  }
  return (
    <BuycarrContainer>
      <div className='header'>
        <h2>Carrinho <br />
          de compras</h2>
        <button onClick={() => { setOpenCar(false) }}>
          X
        </button>
      </div>
      <div className='carrinho'>
        {itensCar.map(item => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveItem} onIncrease={() => { handleIncreaseQuantity(item.id) }}
            onDecrease={() => { handleDecreaseQuantity(item.id) }} />
        ))}
      </div>
      <div className='total'>

        <h2>Total:</h2>
        <h2>{`${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h2>
      </div>
      <div className='finalizar'>

        <button>Finalizar Compra</button>
      </div>
    </BuycarrContainer>

  )
}
export const BuycarrContainer = styled.section`
@media (max-width:600px){
  width: 100vw;
}
position: fixed;
justify-content: space-between;
top:0;
right: 0;
width: 486px;
height: 100vh;
background: #0F52BA;
display: flex;
flex-direction: column;
box-shadow: -5px 0px 6px 0px #00000021;
.header{
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 2rem;
  align-items: center;
  color: white;
  button{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: none;
    color: white;
    background: black;
  }
}
.total{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: white;


}
.finalizar{
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 97px;
  button{
    background: none;
    border: none;
    color: white;
    font-size: 28px;
    font-weight: 700;
  }
}
.carrinho{
  display: flex;
  justify-content: baseline;
  height: 75%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.item{
  position: relative;
  background: white;
  width: 379px;
  height: 95px;
  box-shadow: -2px 2px 10px 0px #0000000D;
  border-radius: 8px;
  display: flex;
  padding: 8px;
  gap: 1rem;
  justify-content: space-around;
  align-items:center; 
  .x{
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    color: white;
    background: black;
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 15px;
  }
  img{
    max-width: 55px;
    max-height: 65px;
  }
  p{
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    min-width: 50px;
    max-width: 50px;
  }
  .flex{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .qtd{
    display: flex;
    width: 50px;
    height: 19px;
    align-items: center;
    justify-content: center;
    border: solid lightgray 1px;
    border-radius: 5px;
    padding: 2px;
    button{
      width: 30px;
      line-height: 5px;
      font-size: 14px;
      padding-bottom: 2px;
      background: none;
      border: none;
      display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    }
    
  }
  .quantidadeprodutos{
    font-size: 15px;
    line-height:8px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-left: solid lightgray 1px ;
    border-right: solid lightgray 1px ;
  }
 
  .quantidade{
    font-size: 5px;
    display: flex;
    gap: 0.2rem;
    flex-direction: column;
  }
  .price{
    font-size: 28px;
    font-weight: 700;
  }
  .button{
    width: 5px;
  }
}`
