import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterAdmin from "./components/RegisterAdmin";
import SignupPropietary from "./components/PropietaryRegister";

function App() {
  return (
    <div>
    <Routes>
      <Route/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registerAdmin" element={<RegisterAdmin/>}/>
      <Route path="/registerPropietary" element={<SignupPropietary/>}/>
      <Route />
      <Route path="/login" element={<Login />} />
      <Route path="/registerAdmin" element={<RegisterAdmin />} />
     <Routes/> 
      <div className="bg-red-600">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default App;
