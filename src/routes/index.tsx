import { createBrowserRouter } from "react-router-dom";
import Root from "../mainlayout/Root";
import Products from "../pages/products/Products";
import Projects from "../pages/projects/Projects";
import Company from "../pages/company/Company";
import Contact from "../pages/contact/Contact";
import Training from "../pages/training/Training";

import Services from "../pages/services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            
           
            { path: "/services", element: <Services /> },
            { path: "/products", element: <Products /> },
            { path: "/projects", element: <Projects /> },
            { path: "/company", element: <Company /> },
            { path: "/contact", element: <Contact /> },
            { path: "/training", element: <Training /> },
        ]
    }
]);

export default router;
