import styled from 'styled-components';
export const BuyCarr = () => {
  return (
    <BuycarrContainer>
      <div className='header'>
        <h2>Carrinho <br />
          de compras</h2>
        <button>
          X
        </button>
      </div>
      <div className='carrinho'>
        <div className='item'>
          <img src="data:image/jpeg;base64,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" alt="" />
          <p>Apple Watch <br />
            Series 4 GPS</p>
          <div className='quantidade'>
            Qtd:
            <div className='qtd'>
              <button>-</button>
              <div className='quantidadeprodutos'>1</div>
              <button>+</button>
            </div>
          </div>
          <div className="price">
            R$399
          </div>
        </div>
      </div>
      <div className='total'>

        <h2>Total:</h2>
        <h2>R$ 798</h2>
      </div>
      <div className='finalizar'>

        <button>Finalizar Compra</button>
      </div>

    </BuycarrContainer>

  )
}
export const BuycarrContainer = styled.section`
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
  justify-content: center;
  background: red;
  height: 65%;
}
.item{
  background: white;
  width: 379px;
  height: 95px;
  box-shadow: -2px 2px 10px 0px #0000000D;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items:center; 
  img{
    max-width: 55px;
    max-height: 65px;
  }
  p{
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
  }
  .qtd{
    display: flex;
    width: 50px;
    height: 19px;
    align-items: center;
    border: solid gray 1px;
    border-radius: 8px;
    padding: 2px;
    button{
      padding: 5px;
      background: none;
      border: none;
    }
    
  }
  .quantidadeprodutos{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    border-left: solid black 1px ;
    border-right: solid black 1px ;
  }
  .quantidade{
    font-size: 5px;
    display: flex;
    flex-direction: column;
  }
  .price{
    font-size: 28px;
    font-weight: 700;
  }
}
`