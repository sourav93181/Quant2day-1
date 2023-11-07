import { Blog, CrtBlog, Home, Signin, Signup } from "../screens";

    
    const AppRoutes = [
      { path: "/", comp: <Home /> },
      { path: "/blogs", comp: <Blog /> },
      { path: "/createblogs", comp: <CrtBlog /> },
      { path: "/login", comp: <Signin /> },
      { path: "/signup", comp: < Signup/> },
    ];
    
    export default AppRoutes;