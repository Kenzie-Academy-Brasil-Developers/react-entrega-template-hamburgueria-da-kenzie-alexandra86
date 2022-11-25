import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  padding: 0.6rem;
  max-width: 100rem;
  width: 100%;

  .divMain {
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-around;
    gap: 4.0625rem;
  }
  @media (max-width: 34.375rem) {
    .divMain{
  flex-direction:column;
  gap: 0;
  margin-top: 1.6875rem;
  justify-content: center;
}
   
  }
`;