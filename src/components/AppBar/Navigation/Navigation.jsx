import { selectIsLoggedIn } from 'Redux/selectors';
import { StyledNavLink } from 'components/StyledLink/StyledLink';
import { useSelector } from 'react-redux';

export const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)
    return(
        <nav>
          
          {/* <StyledNavLink to="/" >
            Home
          </StyledNavLink> */}
          {isLoggedIn &&
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
        </nav>
    )
}