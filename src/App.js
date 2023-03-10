import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Fields from "./pages/fields/Fields";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import styles from "./pages/global.module.css";

function App() {
  return (
    <div className={styles.global}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/field" element={<List />} />
          <Route path="/field/:id" element={<Fields />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
