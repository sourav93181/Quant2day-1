import { Blog, CrtBlog, Home } from "../screens";

    
    const AppRoutes = [
      { path: "/", comp: <Home /> },
      { path: "/blogs", comp: <Blog /> },
      { path: "/createblogs", comp: <CrtBlog /> },
    ];
    
    export default AppRoutes;