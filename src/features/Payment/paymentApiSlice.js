import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const paymentAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (payment) => payment.pyment_Id,

})

    const initialState = paymentAdapter.getInitialState()

    export const paymentsApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getPayments: builder.query({
                query: () =>({
                    url:'/payments',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedPayments = responseData.map(payment =>{
                        return payment
                    })
                    return paymentAdapter.setAll(initialState,loadedPayments)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Payment', id:'LIST'},
                            ...result.ids.map(id => ({type:'Payment',id}))
                        ]
                    }else return [{type:'Payment',id:'LIST'}]
                }
            }),

            addPayment: builder.mutation({
                query: initialPayment => ({
                    url:'/payments',
                    method:'POST',
                    body:{
                        ...initialPayment,
                    }

                }),
                invalidatesTags:[
                    {type:'Payment',id:'LIST'}
                ]
            }),

            updatePayment: builder.mutation({
                query:initialPayment => ({
                    url:'/payments',
                    method:'PATCH',
                    body:{
                        initialPayment
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Payment',id: arg.id}

                ]
            }),
            deletePayment: builder.mutation({
                query:({id}) => ({
                    url:`/payments`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Payment',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetPaymentsQuery,
        useAddPaymentsQuery,
        useUpdatePaymentsQuery,
        useDeletePaymentsQuery
    } = paymentsApiSlice

    export const selectPaymentsResult = paymentsApiSlice.endpoints.getPayments.select()

    const selectPaymentsData = createSelector(
        selectPaymentsResult,
        paymentsResult => paymentsResult.data
    )

    export const {
        selectAll: selectAllPayments,
        selectById:selectPaymentsById,
        selectIds:selectAdminIds
    } = paymentAdapter.getSelectors(state => selectPaymentsData(state) ?? initialState)