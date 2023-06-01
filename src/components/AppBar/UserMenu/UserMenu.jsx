import {useDispatch, useSelector } from "react-redux";
// import { StyledNavLink } from 'components/StyledLink/StyledLink';

import { MenuContainer } from "./UsetMenu.styled"
import { selectUserName } from "Redux/selectors";
import { logout } from "Redux/operations";
// import defaultAvatar from './default-avatar.png'

export const UserMenu = () => {

    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
    // const avatar = defaultAvatar;
    return(
      <MenuContainer>
        {/* <img src="
         {avatar}
        " alt="hg" /> */}
        <span>Привіт, {name}</span>
        <button type='button' onClick={()=>{
            dispatch(logout())
        }}>LogOut</button>
      </MenuContainer>
    )
}