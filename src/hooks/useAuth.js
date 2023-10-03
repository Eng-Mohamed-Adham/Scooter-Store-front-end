import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import jwt_decode from "jwt-decode";


const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = '1512'

    if(token){
        const decoded = jwt_decode(token)

        const {username,type} = decoded.UserInfo

        isManager = type.includes('3200')
        isAdmin = type.includes('5200')

        if(isManager) status = '3200'
        if(isAdmin) status = '5200'

        return { username, type , status , isManager , isAdmin}
    }
    return { username:'', type:[], isManager , isAdmin, status}

}

export default useAuth