import { Outlet,Link } from "react-router-dom";
import { useEffect,useState,useRef } from "react";
import {useRefreshMutation} from "./authApiSlice"
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import usePersist from '../../hooks/usePersist';


const PersistLogin = () => {
    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)


    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()

    useEffect(() => {

        if(effectRan.current === true || process.env.NODE_ENV !== 'development'){

            const verifyRefreshToken = async () => {
                try{
                    await refresh()
                    setTrueSuccess(true)

                }catch(err){
                    console.log(err)
                }
            }

            if(!token && persist) verifyRefreshToken()
        }

        return () => effectRan.current = true
    },[])

    let content
    if (!persist) { // persist: no
        console.log('no persist')
        content = <Outlet />
    } else if (isLoading) { //persist: yes, token: no
        console.log('loading')
        content = <p>Loading...</p>
    } else if (isError) { //persist: yes, token: no
        console.log('error')
        content = (
            <p className='errmsg'>
                {error.data?.message}
                <Link to="/auth">Please login again</Link>.
            </p>
        )
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        console.log('success')
        content = <Outlet />
    } else if (token && isUninitialized) { //persist: yes, token: yes
        console.log('token and uninit')
        console.log(isUninitialized)
        content = <Outlet />
    }

    return content
}
export default PersistLogin