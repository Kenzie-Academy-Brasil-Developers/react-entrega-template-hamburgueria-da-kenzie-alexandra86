import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  padding: 0.6rem;
  max-width: 100rem;
  width: 100%;

  div {
    margin-top: 1.25rem;
    display: flex;
    gap: 4.375rem;
  }
  @media (max-width: 34.375rem) {
    margin-top: 0.875rem;
  }
`;