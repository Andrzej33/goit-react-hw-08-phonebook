import styled from 'styled-components';

export const GreetingTittleStyled = styled.h1`
  padding: 5px;

  margin: auto;
  letter-spacing: 0.0015em;
  font-size: 2.5em;
  color: beige;
  text-shadow: 0 1px #8da1ff, -1px 0 #c0cbff, -1px 2px #8da1ff, -2px 1px #c0cbff,
    -2px 3px #8da1ff, -3px 2px #c0cbff, -3px 4px #8da1ff, -4px 3px #c0cbff,
    -4px 5px #8da1ff, -5px 4px #c0cbff, -5px 6px #8da1ff, -6px 5px #c0cbff,
    -6px 7px #8da1ff, -7px 6px #c0cbff, -7px 8px #8da1ff, -8px 7px #c0cbff;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 1.5em;
  }
`;
