import AccountInfo from "@/components/AccountInfo";
import Empresas from "@/components/Empresas";
import Navigation from "@/components/Navigation";
import { Route, Routes } from "react-router-dom";
import RegistroEmpresa from "@/components/RegistroEmpresa";
import RegisterSupervisor from "@/components/RegisterSupervisor";
import { useStore } from "@/store/user";
import { useEffect } from "react";
import { auth } from "@/config/firebase";
import { getUserByEmail } from "@/service/user";
import Empresa from "@/components/Empresa";
import RegisterEmployee from "@/components/RegisterEmploye";

const Dashboard = () => {
  const setUser = useStore((state: any) => state.setUser);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUser = async () => {
      const userDBFirebase = await getUserByEmail(user?.email ?? "");
      const convertedUserDB = userDBFirebase;
      setUser(convertedUserDB);
    };
    fetchUser();
  }, []);
  return (
    <div className="flex gap-2 mr-4 ">
      <Navigation />
      <Routes>
        <Route path="/" element={<Empresas />} />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/registroempresa" element={<RegistroEmpresa />} />
        <Route path="/register_supervisor" element={<RegisterSupervisor />} />
        <Route path="/empresas/:id" element={<Empresa />} />
        <Route path="/register_empleado" element={<RegisterEmployee />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
