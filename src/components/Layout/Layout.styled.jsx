import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px;
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.05);
  padding-left: 60px;
  padding-right: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
  @media screen and (max-width: 670px) {
    flex-direction: column;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
  nav {
    display: flex;

    gap: 30px;
  }
`;
