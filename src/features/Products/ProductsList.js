import { useGetProductsQuery } from "./ProductsApiSlice";

import { memo } from "react";

const ProductsList = () => {


    const {
        data:product,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery(undefined, {
        pollingInterval: 15000,
        refreshOnFocus: true,
        refreshOnMountOrArgChange: true
    })


    let content


    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const {ids,entities} = product

        function createData(object) {
            const { product_Id,product_name,title,imgs } = object;
            return { product_Id,product_name,title,imgs };
        }

        let obj = [];

        for (let key in entities) {
            obj.push(createData(entities[key]));
        }


        content = ( obj.map((item) => {
                return(
                    <ul key={item.product_Id}>
                        <li>{item.product_Id}</li>
                        <li>{item.product_name}</li>
                        <li>{item.title}</li>
                        <img src={`${item.imgs[0]}`} alt='' width="200px" height="250px"/>
                    </ul>
                )
            })
           )
                     
            
        
    }

    return content

}
 const memoizedProduct = memo(ProductsList)
export default memoizedProduct;