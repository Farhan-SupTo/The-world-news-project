import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/category/category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/Home/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Login/Register";
import PrivateRoute from "./privateroute";
import Terms from "../pages/shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
               path:'/login',
               element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path:'/category',
        element:<Main></Main>,
        children:[
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
    ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute> ,
                loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router
