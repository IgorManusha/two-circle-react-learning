import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import RestComponent from "./RestApi/RestComponent";
import Layout from "./Layout/Layout";
import SingleContact from "./SingleContact/SingleContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:id" element={<SingleContact />} />
          <Route path="/contact" element={<RestComponent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
