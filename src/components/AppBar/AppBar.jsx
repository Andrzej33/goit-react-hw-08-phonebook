import { StyledHeader } from "components/Layout/Layout.styled";
import { Navigation } from "./Navigation/Navigation";
import { AuthNav } from "./Navigation/authNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "Redux/selectors";




 const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return(
<StyledHeader>

<Navigation/>
{isLoggedIn? <UserMenu/> :  <AuthNav/>}


</StyledHeader>

    )
}

export default AppBar;