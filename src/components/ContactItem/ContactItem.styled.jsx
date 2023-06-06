import styled from 'styled-components';

export const BtnBox = styled.div`
  display: flex;
  gap: 30px;
  padding-right: 10px;
  align-items: center;
  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: unset;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  button {
    height: 40px;
    font-family: Lato;
    font-weight: 300;
    font-size: 16px;
    color: rgb(255, 111, 0);
    background-color: #0066cc;
    padding: 5px 20px;
    border: solid #e9c46a 0px;

    border-radius: 6px;
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
