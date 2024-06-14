import AccountInfo from "@/components/AccountInfo";
import Empresas from "@/components/Empresas";
import Navigation from "@/components/Navigation";
import { Route, Routes } from "react-router-dom";
import RegistroEmpresa from "@/components/RegistroEmpresa";
import RegisterSuper from "@/components/RegisterSuper";
import { useStore } from "@/store/user";
import { useEffect } from "react";
import { auth } from "@/config/firebase";
import { getUserByEmail } from "@/service/user";
import Empresa from "@/components/Empresa";

const Dashboard = () => {
  const setUser = useStore((state: any) => state.setUser);
  const user = auth.currentUser;
  const userDB = useStore((state: any) => state.user);

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
        <Route path="/registersuper" element={<RegisterSuper />} />
        <Route path="/empresas/:id" element={<Empresa />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
