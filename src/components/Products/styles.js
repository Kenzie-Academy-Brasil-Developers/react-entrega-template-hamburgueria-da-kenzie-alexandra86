import styled from "styled-components";

export const StyleProduct = styled.li`
  list-style-type: none;
  max-width: 18.75rem;
  width: 100%;
  height: 21.625rem;
  border: 0.125rem solid #e0e0e0;
  border-radius: 0.3125rem;
  display: flex;
  padding-bottom: 23px;
  
  img {
    padding: 15.12px 71px 0px 52px;
  }
  div {
    max-width: 16.375rem;
    width: 100%;
    height: 10.1875rem;
    margin: 0rem;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #333333;
  }
  span {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: #828282;
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #27ae60;
  }

  button {
    width: 6.625rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #27ae60;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    border: 0.125rem solid #27ae60;
    cursor: pointer;
  }
:hover{
  border:0.125rem solid #333333;

}

button:hover{
  cursor:pointer;
  border: 0.125rem solid #E0E0E0;
  color:#828282;
  background-color:#E0E0E0;

}

`;
