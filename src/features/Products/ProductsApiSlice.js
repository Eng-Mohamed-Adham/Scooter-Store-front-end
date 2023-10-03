import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const productAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (product) => product.product_Id,

})

    const initialState = productAdapter.getInitialState()

    export const productsApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getProducts: builder.query({
                query: () =>({
                    url:'/products',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedProducts = responseData.map(product =>{
                        return product
                    })
                    return productAdapter.setAll(initialState,loadedProducts)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Product', id:'LIST'},
                            ...result.ids.map(id => ({type:'Product',id}))
                        ]
                    }else return [{type:'Product',id:'LIST'}]
                }
            }),

            addNewProduct: builder.mutation({
                query: initialProductData => ({
                    url:'/products',
                    method:'POST',
                    body:{
                        ...initialProductData,
                    }

                }),
                invalidatesTags:[
                    {type:'Product',id:'LIST'}
                ]
            }),

            updateProduct: builder.mutation({
                query:initialProduct => ({
                    url:'/products',
                    method:'PATCH',
                    body:{
                        initialProduct
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Product',id: arg.id}

                ]
            }),
            deleteProduct: builder.mutation({
                query:({id}) => ({
                    url:`/products`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Product',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetProductsQuery,
        useAddNewProductMutation,
        useUpdateProductMutation,
        useDeleteProductMutation
    } = productsApiSlice

    export const selectProductsResult = productsApiSlice.endpoints.getProducts.select()

    const selectProductsData = createSelector(
        selectProductsResult,
        productsResult => productsResult.data
    )

    export const {
        selectAll: selectAllProducts,
        selectById:selectProductsById,
        selectIds:selectAdminIds
    } = productAdapter.getSelectors(state => selectProductsData(state) ?? initialState)