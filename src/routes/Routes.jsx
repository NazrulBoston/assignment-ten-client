
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import Update from "../pages/Update/Update";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Navbar></Navbar>
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
           
            {
                path:'/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:501/products/${params.id}`)
            },
            {
                path:'/mycart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch(`http://localhost:501/cart`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/feature/:id',
                element:<BrandProducts></BrandProducts>,
                loader: () => fetch('/data.json')
            },
            {
                path:'/products/:id',
                element:<PrivateRoute> <ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:501/products/${params.id}`)
            },

        
        ]
    }
])

export default router;