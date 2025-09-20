import { createBrowserRouter } from "react-router-dom";
import Root from "../mainlayout/Root";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Projects from "../pages/projects/Projects";
import Company from "../pages/company/Company";
import Contact from "../pages/contact/Contact";
import Training from "../pages/training/Training";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Home/> },
            { path: "/products", element: <Products/> },
            { path: "/projects", element: <Projects/> },
            { path: "/company", element: <Company/> },
            { path: "/contact", element: <Contact/> },
            { path: "/training", element: <Training/> },

           ]
    }
])


export default router