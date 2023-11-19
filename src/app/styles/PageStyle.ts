import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  `;
export const PageContent = styled.div`
min-height: calc(100vh - 135px);
max-width: 1200px;
width: 100%;
margin: 0 2rem;
  display: flex;
  .cards{
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
