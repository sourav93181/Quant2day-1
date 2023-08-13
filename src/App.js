import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      
        {AppRoutes.map((appRoute) => (
          <Route path={appRoute.path} element={appRoute.comp} />
        ))}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
