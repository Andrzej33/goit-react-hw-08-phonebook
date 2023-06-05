import {useDispatch, useSelector } from "react-redux";
// import { StyledNavLink } from 'components/StyledLink/StyledLink';

import { MenuContainer } from "./UsetMenu.styled"
import { selectUserName } from "Redux/selectors";
import { logout } from "Redux/operations";
import { Avatar} from '@chakra-ui/react'
// import defaultAvatar from './default-avatar.png'

export const UserMenu = () => {

    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
    // const avatar = defaultAvatar;
    return(
      <MenuContainer>
        {/* <img src="/src/components/img/giraffe.png" alt="hg" /> */}
        <Avatar bg='blue.400' size='sm' name={name[0]} src="/giraffe.png" />
        <span>Hello, {name}!</span>
        <button type='button' onClick={()=>{
            dispatch(logout())
        }}>LogOut</button>
      </MenuContainer>
    )
}