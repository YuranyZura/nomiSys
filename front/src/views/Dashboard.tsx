import AccountInfo from "@/components/AccountInfo";
import Navigation from "@/components/Navigation";
import StartDashboard from "@/components/StartDashboard";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-2 mr-4 ">
      <Navigation />
      <Routes>
        <Route path="/" element={<StartDashboard />} />
        <Route path="/account" element={<AccountInfo />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
