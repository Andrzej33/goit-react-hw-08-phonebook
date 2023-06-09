import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 690px) {
    gap: 10px;
  }
  span {
    font-size: 24px;
    align-items: center;
    color: rgb(255, 111, 0);
    @media screen and (max-width: 520px) {
      font-size: 20px;
    }
  }
  button {
    font-family: Lato;
    font-weight: 300;
    font-size: 16px;
    color: rgb(255, 111, 0);
    background-color: #0066cc;
    padding: 10px 30px;
    border: solid #e9c46a 0px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 10px;
    transition: 352ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    text-transform: uppercase;
    @media screen and (max-width: 520px) {
      padding: 5px 20px;
    }

    &:hover {
      transition: 352ms;

      transform: translateY(-0px);
      background-color: #fff;
      color: #0066cc;
      border: solid 0px #0066cc;
    }
  }
`;
