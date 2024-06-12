import AccountInfo from "@/components/AccountInfo";
import Empresas from "@/components/Empresas";
import Navigation from "@/components/Navigation";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-2 mr-4 ">
      <Navigation />
      <Routes>
        <Route path="/" element={<Empresas />} />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
