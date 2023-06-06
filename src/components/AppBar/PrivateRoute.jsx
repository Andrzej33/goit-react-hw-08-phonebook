import { selectIsLoggedIn, selectIsRefreshing } from 'Redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = isLoggedIn && isRefreshing;
  return shouldRedirect ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
