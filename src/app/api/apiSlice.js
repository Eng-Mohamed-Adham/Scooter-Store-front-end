import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {setCredentials} from '../../features/auth/authSlice'


const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000',
    credentials:'include',
    prepareHeaders: (headers, {getState})=> {
        const token = getState().auth.token

        if(token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }

})


const baseQueryWithReauth = async (arg,api,extraOptions) => {

    let result = await baseQuery(arg,api,extraOptions)

    if(result?.error?.status === 403){
        console.log('sending refresh token')

        const refreshToken = await baseQuery('auth/refresh',api,extraOptions)

        if(refreshToken?.data){
            api.dispatch(setCredentials({...refreshToken.data}))

            result = await baseQuery(arg,api ,extraOptions)
        }else{
            if(refreshToken?.error?.status === 403) {
                refreshToken.error.data.message = " You login has expired. "
            }
            return refreshToken
        }
    }
    return  result
}


export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    tagTypes:['Category','Admin','User','Product','Order','Payment','Report','Deliveries'],
    endpoints: builder => ({})
})