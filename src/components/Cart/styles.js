import styled from "styled-components";

export const StyledAsyde = styled.aside`
  max-width: 22.8125rem;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  .divTitleCart {
    max-width: 24rem;
    width: 100%;
    height: 4.0625rem;
    background-color: #27ae60;
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
  }
  .titleCart {
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
  }
  .areaDivDefault {
    max-width: 22.8125rem;
    width: 100%;
    height: 9.875rem;
    background-color: #f5f5f5;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3125rem;
  }

  .phraseOfEmptiness {
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #333333;
  }
  .addItems {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: #828282;
    margin-top: 1rem;
  }
  .total {
    max-width: 24rem;
    width: 100%;
    height: 9.875rem;
    background-color: #f5f5f5;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0.625rem;
  }
  .prices {
    max-width: 24rem;
    width: 98%;
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
    border-top: 2px solid #e0e0e0;
  }
  .textTotal {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333333;
  }
  .textPrice {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #828282;
  }
  .btRemoveAll {
    width: 21.4375rem;
    height: 3.75rem;
    padding: 0rem 1.25rem;
    border-radius: 0.5rem;
    background-color: #e0e0e0;
    border: 0.125rem solid #e0e0e0;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #828282;
  }
  .btRemoveAll:hover {
    cursor: pointer;
    background-color: #828282;
    border: 0.125rem solid #828282;
    color: #e0e0e0;
  }
  @media (max-width: 67.5rem) {
    padding: 0;
    margin: 0 auto;
    margin-top: 0.5rem;
  }
  @media (max-width: 34.375rem) {
    .btRemoveAll {
      width: 100%;
      height: 3.75rem;
      padding: 0rem 1.25rem;
      border-radius: 0.5rem;
      background-color: #e0e0e0;
      border: 0.125rem solid #e0e0e0;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: #828282;
    }
  }
`;
