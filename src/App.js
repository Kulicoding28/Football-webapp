import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Fields from "./pages/fields/Fields";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fields" element={<List />} />
          <Route path="/fields/:id" element={<Fields />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
