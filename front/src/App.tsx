import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterAdmin from "./components/RegisterAdmin";
import Authentication from "./views/Authentication";
import { Toaster } from "@/components/ui/toaster";
import Home from "./components/Home";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Authentication />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
