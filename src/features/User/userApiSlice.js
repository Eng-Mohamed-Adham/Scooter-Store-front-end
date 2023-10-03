import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const userAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (user) => user.customer_Id,

})

    const initialState = userAdapter.getInitialState()

    export const usersApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getUsers: builder.query({
                query: () =>({
                    url:'/users',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedUsers = responseData.map(user =>{
                        return user
                    })
                    return userAdapter.setAll(initialState,loadedUsers)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'User', id:'LIST'},
                            ...result.ids.map(id => ({type:'User',id}))
                        ]
                    }else return [{type:'User',id:'LIST'}]
                }
            }),

            addUser: builder.mutation({
                query: initialUser => ({
                    url:'/users',
                    method:'POST',
                    body:{
                        ...initialUser,
                    }

                }),
                invalidatesTags:[
                    {type:'User',id:'LIST'}
                ]
            }),

            updateUser: builder.mutation({
                query:initialUser => ({
                    url:'/users',
                    method:'PATCH',
                    body:{
                        initialUser
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'User',id: arg.id}

                ]
            }),
            deleteUser: builder.mutation({
                query:({id}) => ({
                    url:`/users`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'User',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetUsersQuery,
        useAddUsersQuery,
        useUpdateUsersQuery,
        useDeleteUsersQuery
    } = usersApiSlice

    export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

    const selectUsersData = createSelector(
        selectUsersResult,
        usersResult => usersResult.data
    )

    export const {
        selectAll: selectAllUsers,
        selectById:selectUsersById,
        selectIds:selectAdminIds
    } = userAdapter.getSelectors(state => selectUsersData(state) ?? initialState)