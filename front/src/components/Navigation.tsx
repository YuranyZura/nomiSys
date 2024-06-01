import { auth } from "@/config/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { BsBuildingsFill, BsReceiptCutoff } from "react-icons/bs";

const Navigation = () => {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="bg-sky-600 w-1/12 relative h-screen py-2 pr-0 flex flex-col justify-between ">
      <div className="flex flex-col">
        <img
          src={user?.photoURL ?? ""}
          className="rounded-full h-12 w-12 text-wrap mx-auto"
        />
        <h4 className="mx-auto text-white font-semibold text-center">
          {user?.displayName}
        </h4>
        <Link
          className="mx-auto rounded-lg bg-slate-800 p-1 text-xs opacity-80 text-white hover:bg-slate-500 cursor-pointer"
          to="/dashboard/account"
        >
          Ver cuenta
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col text-white">
        <Link
          className="border-y-2 border-solid border-blue-950 w-full text-center py-2 hover:bg-blue-500"
          to="/dashboard/empresas"
        >
          <BsBuildingsFill className="mx-auto text-white" size={25} />
          Empresas
        </Link>
        <Link
          className="border-y-2 border-solid border-blue-950 w-full text-center py-2 hover:bg-blue-500"
          to="/dashboard/nomina"
        >
          <BsReceiptCutoff className="mx-auto text-white" size={25} />
          Nomina
        </Link>
      </div>
      <nav></nav>
      <div className="absolute bottom-0 mb-2 w-full flex justify-center">
        <button
          className="text-white mx-auto font-italic"
          onClick={handleSignOut}
        >
          <GoSignOut size={28} className="mx-auto" />
          Cerrar sesión
        </button>
      </div>{" "}
    </header>
  );
};

export default Navigation;
