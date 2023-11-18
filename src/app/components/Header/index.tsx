import styled from "styled-components"
import { Carr } from "./carr"

export const Header = () => {
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
          <button>
            <Carr />
            0</button>

        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
export const HeaderContainer = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
  background: blue;
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