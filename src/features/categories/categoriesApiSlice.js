import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const categoryAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,
    selectId: (category) => category.category_Id,

})

    const initialState = categoryAdapter.getInitialState()

    export const categoriesApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getCategories: builder.query({
                query: () =>({
                    url:'/categories',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedCategories = responseData.map(category =>{
                        return category
                    })
                    return categoryAdapter.setAll(initialState,loadedCategories)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Category', id:'LIST'},
                            ...result.ids.map(id => ({type:'Category',id}))
                        ]
                    }else return [{type:'Category',id:'LIST'}]
                }
            }),

            addCategory: builder.mutation({
                query: initialCategory => ({
                    url:'/categories',
                    method:'POST',
                    body:{
                        ...initialCategory,
                    }

                }),
                invalidatesTags:[
                    {type:'Category',id:'LIST'}
                ]
            }),

            updateCategory: builder.mutation({
                query:initialCategory => ({
                    url:'/categories',
                    method:'PATCH',
                    body:{
                        initialCategory
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Category',id: arg.id}

                ]
            }),
            deleteCategory: builder.mutation({
                query:({id}) => ({
                    url:`/categories`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Category',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetCategoriesQuery,
        useAddCategoryMutation,
        useUpdateCategoryMutation,
        useDeleteCategoryMutation
    } = categoriesApiSlice

    export const selectCategoriesResult = categoriesApiSlice.endpoints.getCategories.select()

    const selectCategoriesData = createSelector(
        selectCategoriesResult,
        categoriesResult => categoriesResult.data
    )

    export const {
        selectAll: selectAllCategories,
        selectById:selectCategoriesById,
        selectIds:selectCategoryIds
    } = categoryAdapter.getSelectors(state => selectCategoriesData(state) ?? initialState)