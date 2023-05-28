import { StyledNavLink } from 'components/StyledLink/StyledLink';

export const AuthNav = () => {

    return(
        <nav>
          
          <StyledNavLink to="/register" >
            Register
          </StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </nav>
    )
}