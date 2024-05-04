import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser } from "./authSlice"

const AuthorisedRoutes = () => {
    const role = localStorage.getItem("userRole");
    const token = localStorage.getItem("loginToken");
    
    const location = useLocation()

     if (!token) {
        return <Navigate to="/account/login" state={{ from: location }} replace />;
    }

    
    if (role === 'admin') {
        return <Outlet />;
    } else {
        return <Navigate to="/" replace />;
    }

}
export default AuthorisedRoutes;
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useLocation, Navigate, Outlet } from 'react-router-dom';

// const AuthorisedRoutes = () => {
//     const token = useSelector(selectCurrentToken);
//     const user = useSelector(selectCurrentUser);
//     const location = useLocation();

//     useEffect(() => {
//         const storedToken = localStorage.getItem('loginToken');
//         if (!token && storedToken) {
//             // If there's a token in local storage but not in Redux store, dispatch an action to set the token in Redux
//             // For example:
//             // dispatch(setToken(storedToken));
//         }
//     }, [token]);

//     if (!token && !localStorage.getItem('loginToken')) {
//         return <Navigate to="/account/login" state={{ from: location }} replace />;
//     }

//     if (user && user.role === 'admin') {
//         return <Outlet />;
//     } else {
//         return <Navigate to="/" replace />;
//     }
// }

// export default AuthorisedRoutes;
