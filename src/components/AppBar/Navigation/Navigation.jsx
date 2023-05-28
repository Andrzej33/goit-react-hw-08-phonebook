import { StyledNavLink } from 'components/StyledLink/StyledLink';

export const Navigation = () => {

    return(
        <nav>
          
          <StyledNavLink to="/" >
            Home
          </StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </nav>
    )
}