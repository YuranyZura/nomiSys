import { auth } from "@/config/firebase";
import { getUserByEmail } from "@/service/user";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";

const AccountInfo = () => {
  const [userDB, setUserDB] = useState<any>(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUser = async () => {
      const userDBFirebase = await getUserByEmail(user?.email ?? "");
      const convertedUserDB = userDBFirebase;
      setUserDB(convertedUserDB);
    };

    fetchUser();
  }, []);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const username = data.get("username");
    const phone = data.get("phone");
    const doc = data.get("doc");

    const userDB = {
      username,
      phone,
      doc,
    };

    console.log(userDB);
  };
  return (
    <div className="min-w-96 w-full my-2 flex items-center bg-gray-100 rounded-md">
      <div className="w-5/12 bg-sky-600 mx-auto rounded-md p-4  text-white space-y-2">
        <img
          src={user?.photoURL ?? ""}
          className="rounded-full w-72 text-wrap mx-auto "
        />
        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-2  gap-20">
            <p className="text-white ">Username:</p>
            <input
              name="username"
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1 -ml-40"
              value={userDB?.username ?? ""}
              onChange={(e) =>
                setUserDB({ ...userDB, username: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2  gap-20">
            <p className="text-white">Email:</p>
            <input
              name="email"
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1  -ml-40"
              value={user?.email ?? ""}
              onChange={(e) => setUserDB({ ...userDB, email: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-20">
            <p className="text-white">Celular:</p>
            <input
              name="phone"
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1  -ml-40"
              value={userDB?.phone ?? ""}
              onChange={(e) => setUserDB({ ...userDB, phone: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-20">
            <p className="text-white">Documento:</p>
            <input
              name="doc"
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1  -ml-40"
              value={userDB?.doc ?? ""}
              onChange={(e) => setUserDB({ ...userDB, doc: e.target.value })}
            />
          </div>
          <div className="flex">
            <button
              className="mx-auto flex space-x-1 items-center bg-yellow-500 rounded-md py-1 px-4"
              type="submit"
            >
              <GrUpdate size={20} className="font-bold" />
              <p className="font-bold text-xl">Actualizar</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AccountInfo;
