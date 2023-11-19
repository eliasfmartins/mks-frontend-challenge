import styled from "styled-components"
import { Carr } from "./carr"
import { useCarrinho } from "@/app/context/CarrContext";

export const Header = () => {
  const { openCar, setOpenCar, itensCar, setItensCar } = useCarrinho();

  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo">
          <span>MKS</span>
          <p>
            Sistemas
          </p>
        </div>
        <div className="carr">
          <button onClick={() => setOpenCar(true)}>
            <Carr />

            {itensCar.length}
            </button>
            
           

        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
export const HeaderContainer = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
  background: #0F52BA;
;
  height: 101px;

`
export const HeaderContent = styled.div`
font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  width: 100%;
  max-width: 1200px;
  height: 101px;
  button{
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    border: none;
    width: 90px;
    height: 45px;
  
  }
  .carr{
  }
  .length{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    padding: 15px;
    border-radius: 50%;
    background: red;
    bottom: -10px;
    left: -10px;
    font-weight: 700;
  }
  span{
    font-size:40px
    
  }
  .logo{
    color: white;
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
  }

`