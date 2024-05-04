import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/components/Home"
import Login from "./pages/Login/components/Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./router/Root";
import Products from "./pages/Products/components/Products";
import Categories from "./pages/Categories/components/Categories";
import Notfound from "./NotFound/Notfound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/products",
        element: <Products/>,

      },
      {
        path: "/Categories",
        element: <Categories/>,
      },
      {
        path: "*",
        element: <Notfound/>


      }
    
      
    
    ]
  },
]);

function App() {
  

  return (
    <>

    
   
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
