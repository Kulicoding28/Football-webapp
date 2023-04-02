import { Route, BrowserRouter, Routes } from "react-router-dom";
import Fields from "./pages/fields/Fields";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import styles from "./pages/global.module.css";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className={styles.global}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fields" element={<List />} />
          <Route path="/fields/:id" element={<Fields />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
