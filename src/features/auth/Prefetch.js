import {store} from '../../app/store'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { categoriesApiSlice } from '../categories/categoriesApiSlice';
import { adminsApiSlice } from '../Admin/adminApiSlice';
import { usersApiSlice } from '../User/userApiSlice';
import { productsApiSlice } from '../Products/ProductsApiSlice';
import { ordersApiSlice } from '../Order/orderApiSlice';
import { paymentsApiSlice } from '../Payment/paymentApiSlice';
import { reportsApiSlice } from '../Report/reportApiSlice';
import { deliveriesApiSlice } from '../deliveries/deliveriesApiSlice';




const Prefetch = () => {
    useEffect(() => {
        store.dispatch(categoriesApiSlice.util.prefetch('getCategories','categoriesList', {force: true}))

        store.dispatch(adminsApiSlice.util.prefetch('getAdmins','AdminsList',{force:true}))

        store.dispatch(usersApiSlice.util.prefetch('getUsers','UsersList', {force: true}))
        store.dispatch(productsApiSlice.util.prefetch('getProducts','ProductsList', {force: true}))
        store.dispatch(ordersApiSlice.util.prefetch('getOrders','OrdersList', {force: true}))
        
        store.dispatch(paymentsApiSlice.util.prefetch('getPayments','PaymentsList', {force: true}))
        store.dispatch(reportsApiSlice.util.prefetch('getReports','ReportsList', {force: true}))
        store.dispatch(deliveriesApiSlice.util.prefetch('getDeliveries','DeliveriesList', {force: true}))


    },[])

    return <Outlet/>
}


export default Prefetch