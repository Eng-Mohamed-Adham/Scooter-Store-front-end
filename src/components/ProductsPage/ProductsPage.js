


import { Box } from '@mui/material'
import React from 'react'
import { useGetProductsQuery } from '../../features/Products/ProductsApiSlice'
import Product from './product'
const ProductsPage = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery(undefined, {
        pollingInterval: 15000,
        refreshOnFocus: true,
        refreshOnMountOrArgChange: true
    })


    let content;

    if (isLoading) return <Box>Loading.....</Box>
    if (isError) return <Box>{error}</Box>

    if (isSuccess) {
        const { ids, entities } = products

        for (const key in entities) {
            if (entities.hasOwnProperty(key)) {
                const product = entities[key];
                const { imgs, product_name, title,rate,price,color,description,product_Id } = product

                return (
                    <Product 
                    product_Id={product_Id} 
                    product_name={product_name} 
                    title={title} 
                    description={description}
                    rate={rate}
                    price={price}
                    color={color}
                    imgs={imgs[0]}
                    />
                )
            }

        }
    }


    return content
}

export default ProductsPage
