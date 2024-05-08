import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterAdmin from "./components/RegisterAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route />
        <Route path="/login" element={<Login />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
      </Routes>
      <div className="">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default App;
