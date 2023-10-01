import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "../pages/createProduct";
import LandingPage from "../pages/landingPage";
import InfoProduct from "../components/Product";

function App() {
  return (
    <div className="w-screen h-screen">
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              element={<CreateProduct />}
              path="/my-app-react/createproduct"
            />
            <Route element={<LandingPage />} path="/" />
            <Route element={<InfoProduct />} path="/InfoProduct/:id" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
