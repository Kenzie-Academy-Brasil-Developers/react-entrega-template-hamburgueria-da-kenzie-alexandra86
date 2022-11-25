import styled from "styled-components";

export const StyledAsyde = styled.aside`
  max-width: 22.8125rem;
  width: 100%;
    height: 33.125rem;
    

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
  .titleCart{
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #FFFFFF;
  }
  .areaDivDefault{
    max-width: 22.8125rem;
    width: 100%;
    height: 9.875rem;
    background-color:#F5F5F5;
    margin-top:0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap:0.3125rem;
  }
  .phraseOfEmptiness{
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color:#333333;
  }
  .addItems{
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: #828282;
    margin-top: 1rem;
  
  }
  .total{
    max-width: 24rem;
    width: 100%;
    height: 9.875rem;
    background-color:#F5F5F5;
    margin-top:0;
    display: flex;
    flex-direction: column;
    gap:16px;
    padding: 0.625rem
  }
  .prices{
    max-width: 24rem;
    width: 98%;
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
  }
  .textTotal{
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color:#333333;
  }
  .textPrice{
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color:#828282;
  }
  .btRemoveAll{
    width: 21.4375rem;
    height: 3.75rem;
    padding: 0rem 1.25rem;
    border-radius: 0.5rem;
    background-color:#E0E0E0;
    border: 0.125rem solid #E0E0E0;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color:#828282;
  }
  .btRemoveAll:hover{
    cursor:pointer;
    background-color: #828282;
    border: 0.125rem solid #828282;
    color:#E0E0E0;
  }
  @media (max-width: 34.375rem) {
    padding:0;
  }

`;
