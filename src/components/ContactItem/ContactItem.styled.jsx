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
    button{
height: 40px;
font-family: Lato;
font-weight: 300;
font-size: 16px;
color: rgb(255, 111, 0);
background-color: #0066CC;
padding: 5px 20px;
border: solid #e9c46a 0px;
/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
border-radius: 6px;
transition : 352ms;
transform: translateY(0);
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;

text-transform: uppercase;
@media screen and (max-width: 520px) {
  padding: 5px 20px;
}

&:hover{

transition : 352ms;
/* padding: 10px 29px; */
transform : translateY(-0px);
background-color: #fff;
color: #0066cc;
border: solid 0px #0066cc;
/* @media screen and (max-width: 520px){
    padding: 8px 22px;  
} */
}

    }
    
`