import { auth } from "@/config/firebase";
import { getUserByEmail } from "@/service/user";
import { useEffect, useState } from "react";

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

  console.log(userDB);
  return (
    <div className="min-w-96 w-full my-4 flex items-center">
      <div className="w-5/12 bg-sky-600 mx-auto rounded-md p-4  text-white space-y-2">
        <img
          src={user?.photoURL ?? ""}
          className="rounded-full w-72 text-wrap mx-auto "
        />
        <div className="space-y-4">
          <div className="grid grid-cols-2  px-8">
            <p className="text-white ">Username:</p>
            <input
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1 -ml-40"
              value={userDB?.username ?? ""}
            />
          </div>
          <div className="grid grid-cols-2  px-8">
            <p className="text-white">Email:</p>
            <input
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1  -ml-40"
              value={user?.email ?? ""}
            />
          </div>
          <div className="grid grid-cols-2  px-8">
            <p className="text-white">Celular:</p>
            <input
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1  -ml-40"
              value={userDB?.phone ?? ""}
            />
          </div>
          <div className="grid grid-cols-2  px-8">
            <p className="text-white">Documento:</p>
            <input
              type="text"
              className="w-full bg-white bg-opacity-50 rounded-md p-1  -ml-40"
              value={userDB?.doc ?? ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
