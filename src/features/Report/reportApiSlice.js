import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const reportAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ?1 : -1,

    selectId: (report) => report.report_Id,

})

    const initialState = reportAdapter.getInitialState()

    export const reportsApiSlice = apiSlice.injectEndpoints({
        endpoints: builder => ({
            getReports: builder.query({
                query: () =>({
                    url:'/reports',
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }),
            
                transformResponse: responseData => {
                    const loadedReports = responseData.map(report =>{
                        return report
                    })
                    return reportAdapter.setAll(initialState,loadedReports)
                },
                providesTags: (result, error , arg) => {
                    
                    if(result?.ids){
                        return [
                            {type:'Report', id:'LIST'},
                            ...result.ids.map(id => ({type:'Report',id}))
                        ]
                    }else return [{type:'Report',id:'LIST'}]
                }
            }),

            addReport: builder.mutation({
                query: initialReport => ({
                    url:'/reports',
                    method:'POST',
                    body:{
                        ...initialReport,
                    }

                }),
                invalidatesTags:[
                    {type:'Report',id:'LIST'}
                ]
            }),

            updateReport: builder.mutation({
                query:initialReport => ({
                    url:'/reports',
                    method:'PATCH',
                    body:{
                        initialReport
                    }
                }),
                invalidatesTags : (result,error ,arg) => [
                    {type:'Report',id: arg.id}

                ]
            }),
            deleteReport: builder.mutation({
                query:({id}) => ({
                    url:`/reports`,
                    method:'DELETE',
                    body:{id}
                }),
                invalidatesTags:(result,error,arg) => [
                    {type:'Report',id:arg.id}
                ]
            })
        })
    })


    export const  {
        useGetReportsQuery,
        useAddReportsQuery,
        useUpdateReportsQuery,
        useDeleteReportsQuery
    } = reportsApiSlice

    export const selectReportsResult = reportsApiSlice.endpoints.getReports.select()

    const selectReportsData = createSelector(
        selectReportsResult,
        reportsResult => reportsResult.data
    )

    export const {
        selectAll: selectAllReports,
        selectById:selectReportsById,
        selectIds:selectAdminIds
    } = reportAdapter.getSelectors(state => selectReportsData(state) ?? initialState)