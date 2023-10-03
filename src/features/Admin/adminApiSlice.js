import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const adminAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (admin) => admin.admin_Id,

})

    const initialState = adminAdapter.getInitialState()

    export const adminsApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getAdmins: builder.query({
                query: () =>({
                    url:'/admins',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedAdmins = responseData.map(admin =>{
                        return admin
                    })
                    return adminAdapter.setAll(initialState,loadedAdmins)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Admin', id:'LIST'},
                            ...result.ids.map(id => ({type:'Admin',id}))
                        ]
                    }else return [{type:'Admin',id:'LIST'}]
                }
            }),

            addAdmin: builder.mutation({
                query: initialAdmin => ({
                    url:'/admins',
                    method:'POST',
                    body:{
                        ...initialAdmin,
                    }

                }),
                invalidatesTags:[
                    {type:'Admin',id:'LIST'}
                ]
            }),

            updateAdmin: builder.mutation({
                query:initialAdmin => ({
                    url:'/admins',
                    method:'PATCH',
                    body:{
                        initialAdmin
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Admin',id: arg.id}

                ]
            }),
            deleteAdmin: builder.mutation({
                query:({id}) => ({
                    url:`/admins`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Admin',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetAdminsQuery,
        useAddAdminsQuery,
        useUpdateAdminsQuery,
        useDeleteAdminsQuery
    } = adminsApiSlice

    export const selectAdminsResult = adminsApiSlice.endpoints.getAdmins.select()

    const selectAdminsData = createSelector(
        selectAdminsResult,
        adminsResult => adminsResult.data
    )

    export const {
        selectAll: selectAllAdmins,
        selectById:selectAdminsById,
        selectIds:selectAdminIds
    } = adminAdapter.getSelectors(state => selectAdminsData(state) ?? initialState)