import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterAdmin from "./components/RegisterAdmin";
import Authentication from "./views/Authentication";
import { Toaster } from "@/components/ui/toaster";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Authentication />} />
        <Route />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
