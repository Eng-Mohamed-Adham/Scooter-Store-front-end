import { useGetCategoriesQuery } from "./categoriesApiSlice";


import { memo } from "react";

const CategoriesList = () => {

    let category_Id = 1;

    const {
        data:category,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCategoriesQuery(undefined, {
        pollingInterval: 15000,
        refreshOnFocus: true,
        refreshOnMountOrArgChange: true
    })
    // const {category} = useGetCategoriesQuery("categoriesList", {
    //     selectFromResult: ({data}) => ({
    //             category: data?.entities[category_Id]
                    
    //         })
    // })

    let content


    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        
        const {ids,entities} = category

            const {category_Id,name,category_Type} = entities[1]

            return(
                <ul>
                    <li>{category_Id}</li>
                    <li>{name}</li>
                    <li>{category_Type}</li>

                </ul>
            )
    }

    return content

}
 const memoizedCategory = memo(CategoriesList)
export default memoizedCategory;