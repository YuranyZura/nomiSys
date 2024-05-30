import { auth } from "@/config/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [user, setUser] = useState(auth.currentUser);

  return (
    <header className="bg-sky-600 w-1/12 relative h-screen py-2 pr-2">
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
      <div className="flex justify-center items-center h-[25vh] my-px-">
        <Link
          className="border-2 border-solid border-red-600"
          to="/dashboard/empresas"
        >
          Empresas
        </Link>
      </div>
      <nav></nav>
    </header>
  );
};

export default Navigation;
