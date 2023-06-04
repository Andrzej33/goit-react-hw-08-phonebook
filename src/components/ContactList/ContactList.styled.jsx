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
    justify-content: space-between;
    /* padding-bottom: 20px; */
    background: #DAD2CA;
  color: #444;
  border-radius: .3em;
  transition: .3s ease-out;
  &:hover{background: #E9E4E0;}

  p {
      text-transform: capitalize;
      /* color: rgb(30 17 226); */
      
      font-size: 24px;
      position: relative;
  display: block;
  padding: .4em .4em .4em 2em;
  /* margin: .5em 0; */
  
  /* text-decoration: none; */
}
  button {
      --c: #fff;
min-width: 80px;
/* height: 80%; */
      background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%)
          var(--_p, 100%) / 300% no-repeat,
        #e97f02;
        cursor: pointer;
      color: #0000;
      border: none;
      transform: perspective(500px) rotateY(calc(20deg * var(--_i, -1)));
      text-shadow: calc(var(--_i, -1) * 0.08em) -0.01em 0 var(--c),
        calc(var(--_i, -1) * -0.08em) 0.01em 2px #0004;
      outline-offset: 0.1em;
      transition: 0.3s;
      &:hover,
      &:focus-visible {
        --_p: 0%;
        --_i: 1;
      }
    }
    }
  

  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;
