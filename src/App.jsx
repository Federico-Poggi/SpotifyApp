import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
