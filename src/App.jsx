import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Globalstyle.scss";
import SchermataHome from "./components/schermate/SchermataHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;