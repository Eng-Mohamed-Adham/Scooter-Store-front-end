import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const deliveryAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (delivery) => delivery.delivery_Id,

})

    const initialState = deliveryAdapter.getInitialState()

    export const deliveriesApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getDeliveries: builder.query({
                query: () =>({
                    url:'/deliveries',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedDeliveries = responseData.map(delivery =>{
                        return delivery
                    })
                    return deliveryAdapter.setAll(initialState,loadedDeliveries)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Delivery', id:'LIST'},
                            ...result.ids.map(id => ({type:'Delivery',id}))
                        ]
                    }else return [{type:'Delivery',id:'LIST'}]
                }
            }),

            addDelivery: builder.mutation({
                query: initialDelivery => ({
                    url:'/deliveries',
                    method:'POST',
                    body:{
                        ...initialDelivery,
                    }

                }),
                invalidatesTags:[
                    {type:'Delivery',id:'LIST'}
                ]
            }),

            updateDelivery: builder.mutation({
                query:initialDelivery => ({
                    url:'/deliveries',
                    method:'PATCH',
                    body:{
                        initialDelivery
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Delivery',id: arg.id}

                ]
            }),
            deleteDelivery: builder.mutation({
                query:({id}) => ({
                    url:`/deliveries`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Delivery',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetDeliveriesQuery,
        useAddDeliveriesQuery,
        useUpdateDeliveriesQuery,
        useDeleteDeliveriesQuery
    } = deliveriesApiSlice

    export const selectDeliveriesResult = deliveriesApiSlice.endpoints.getDeliveries.select()

    const selectDeliveriesData = createSelector(
        selectDeliveriesResult,
        deliveriesResult => deliveriesResult.data
    )

    export const {
        selectAll: selectAllDeliveries,
        selectById:selectDeliveriesById,
        selectIds:selectAdminIds
    } = deliveryAdapter.getSelectors(state => selectDeliveriesData(state) ?? initialState)