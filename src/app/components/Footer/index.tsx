import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterContainer>
      <p>MKS sistemas &copy; Todos os direitos reservados</p>
    </FooterContainer>
  )
}
export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  background: #EEEEEE;
`