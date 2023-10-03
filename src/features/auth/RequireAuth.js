import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const RequireAuth = ({allowedRoles}) => {
    const location = useLocation()
    const {type} = useAuth()

    const content =(
        type.some(one => allowedRoles.includes(one))
        ? <Outlet />
        : <Navigate to='/auth' state={{from:location}} replace />
    )

    return content

}

export default RequireAuth