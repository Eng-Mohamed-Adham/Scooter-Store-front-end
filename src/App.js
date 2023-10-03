import './App.css';
import { Routes, Route, } from 'react-router-dom'
import Public from './components/HomePage/Public';
import Layout from './components/HomePage/Layout';
import Prefetch from './features/auth/Prefetch';
import Login from './features/auth/LoginPage';
import CategoriesList from './features/categories/CategoriesList';
import AdminsList from './features/Admin/AdminsList'
import UsersList from './features/User/UsersList';
import { ROLES } from './config/roles';
import RequireAuth from './features/auth/RequireAuth';
import PersistLogin from './features/auth/PersistLogin';
import ProductsPage from './components/ProductsPage/ProductsPage';
import NewProductForm from './components/ProductsPage/NewProductForm';
import ProductsList from './features/Products/ProductsList'

function App() {



  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />

        <Route path='product' element={<ProductsPage/>}/>



        <Route path='users' element={<UsersList />}>

        </Route>
        <Route path='auth' element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
          <Route path='products'  >
          <Route index element={<ProductsList />} />
          <Route element={<PersistLogin />}>

          <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
              <Route path='new' element={<NewProductForm />} />
          </Route>
          </Route>
        </Route>
        <Route path='categories' element={<CategoriesList />}>

        </Route>

            <Route path='order' >

            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path='admins' element={<AdminsList />}>

                </Route>
              </Route>

              <Route path='payments'>

              </Route>
              <Route path='reports' >

              </Route>
              <Route path='deliveries' >

              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
