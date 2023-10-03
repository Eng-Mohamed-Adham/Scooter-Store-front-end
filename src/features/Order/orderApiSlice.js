import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const orderAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (order) => order.order_Id,

})

    const initialState = orderAdapter.getInitialState()

    export const ordersApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getOrders: builder.query({
                query: () =>({
                    url:'/orders',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedOrders = responseData.map(order =>{
                        return order
                    })
                    return orderAdapter.setAll(initialState,loadedOrders)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Order', id:'LIST'},
                            ...result.ids.map(id => ({type:'Order',id}))
                        ]
                    }else return [{type:'Order',id:'LIST'}]
                }
            }),

            addOrder: builder.mutation({
                query: initialOrder => ({
                    url:'/orders',
                    method:'POST',
                    body:{
                        ...initialOrder,
                    }

                }),
                invalidatesTags:[
                    {type:'Order',id:'LIST'}
                ]
            }),

            updateOrder: builder.mutation({
                query:initialOrder => ({
                    url:'/orders',
                    method:'PATCH',
                    body:{
                        initialOrder
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Order',id: arg.id}

                ]
            }),
            deleteOrder: builder.mutation({
                query:({id}) => ({
                    url:`/orders`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Order',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetOrdersQuery,
        useAddOrdersQuery,
        useUpdateOrdersQuery,
        useDeleteOrdersQuery
    } = ordersApiSlice

    export const selectOrdersResult = ordersApiSlice.endpoints.getOrders.select()

    const selectOrdersData = createSelector(
        selectOrdersResult,
        ordersResult => ordersResult.data
    )

    export const {
        selectAll: selectAllOrders,
        selectById:selectOrdersById,
        selectIds:selectAdminIds
    } = orderAdapter.getSelectors(state => selectOrdersData(state) ?? initialState)