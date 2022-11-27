import styled from "styled-components";

export const StyledCartProducts = styled.li`
  max-width: 21.4375rem;
  width: 100%;
  height: 5rem;
  list-style: none;
  margin-left: 0.9375rem;
  margin-top: 1.5625rem;
  margin-bottom: 1.3125rem;

  .liCartProducts {
    display: flex;
    width: 80%;
  }
  .imgCartProducts {
    height: 4.375rem;
    width: 4.375rem;
    background-color: #e0e0e0;
    border-radius: 0.5rem;
    object-fit: contain;
  }

  .divInformCartProducts {
    max-width: 15.8125rem;
    width: 100%;
    height: 3.375rem;
    display: flex;
    align-items: center;
  }
  .titleCartProducts {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: #333333;
  }

  .divAreaInform {
    margin-left: 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-right: 6.875rem;
    width: 28%;
  }

  .titleCategoryCartProducts {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: #828282;
  }
  .btRemoveCart {
    width: 0;
    height: 0;
    margin-top: 0.125rem;
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: #bdbdbd;
  }
  .btRemoveCart:hover {
    cursor: pointer;
    color: #828282;
    font-weight: 600;
  }
  :hover {
    border: 1px solid #828282;
    padding: 3px;
    border-radius: 0.5rem;
  }
  @media (max-width: 34.375rem) {
    .liCartProducts {
      width: 37%;
    }
  }
`;
