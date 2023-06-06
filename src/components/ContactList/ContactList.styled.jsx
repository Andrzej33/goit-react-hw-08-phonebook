import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  padding-left: 10px;
  counter-reset: li;

  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #dad2ca;
    color: #444;
    border-radius: 0.3em;
    transition: 0.3s ease-out;
    &:hover {
      background: #e9e4e0;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    p {
      text-transform: capitalize;

      font-size: 24px;
      position: relative;
      display: block;
      padding: 0.4em 0.4em 0.4em 2em;
    }
  }
`;
