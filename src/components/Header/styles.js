import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 0.6rem;
  max-width: 100rem;
  width: 100%;
  height: 5rem;
`;

export const StyledHeaderDiv = styled.div`
  margin-top: 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 34.375rem) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 22.8125rem;
  width: 100%;
  height: 3.75rem;
  border-radius: 0.5rem;
  padding: 0rem 1.25rem;
  border: 0.125rem solid #e0e0e0;

  .inputSearch {
    outline: none;
    border: none;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0rem 0.15625rem;
  }

  :hover {
    border: 0.125rem solid #333333;
  }
  .inputSearch::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
  }
  :focus {
    border: 0.125rem solid #333333;
  }

  button {
    width: 6.6875rem;
    height: 2.5rem;
    padding: 0rem 1.25rem;
    border-radius: 0.5rem;
    background-color: #27ae60;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    border: 0.125rem solid #27ae60;
    cursor: pointer;
  }
  button:hover {
    cursor: pointer;
    border: 0.125rem solid #93d7af;
    color: #ffffff;
    background-color: #93d7af;
  }

  @media (max-width: 34.375rem) {
    .inputSearch {
      outline: none;
      border: none;
      width: 62%;
      margin-right: 0;
    }
    width: 100%;
    height: 3.8125rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
