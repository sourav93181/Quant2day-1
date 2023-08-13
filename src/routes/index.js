import { Blog, Home } from "../screens";

    
    const AppRoutes = [
      { path: "/", comp: <Home /> },
      { path: "/blogs", comp: <Blog /> },
    ];
    
    export default AppRoutes;