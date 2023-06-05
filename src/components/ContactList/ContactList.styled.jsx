import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  padding-left: 10px;
  counter-reset: li;
  /* max-width: 550px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); */
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
  li {
    /* background-color: #111111; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-bottom: 20px; */
    background: #DAD2CA;
  color: #444;
  border-radius: .3em;
  transition: .3s ease-out;
  &:hover{background: #E9E4E0;}
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  p {
      text-transform: capitalize;
      /* color: rgb(30 17 226); */
      
      font-size: 24px;
      position: relative;
  display: block;
  padding: .4em .4em .4em 2em;
  
}
 
  

  
}
`;
