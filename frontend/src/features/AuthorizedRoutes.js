import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser } from "./authSlice"

const AuthorisedRoutes = () => {
    const token = useSelector(selectCurrentToken)
    const user = useSelector(selectCurrentUser)
    
    const location = useLocation()

     if (!token) {
        return <Navigate to="/account/login" state={{ from: location }} replace />;
    }

    
    if (user && user.role === 'admin') {
        return <Outlet />;
    } else {
        return <Navigate to="/" replace />;
    }

}
export default AuthorisedRoutes;