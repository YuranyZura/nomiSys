import { auth, db } from "@/config/firebase";
import { getUser } from "@/service/user";
import { collection, query, where, getDocs } from "firebase/firestore";

const AccountInfo = () => {
  const user = auth.currentUser;
  const userDB = getUser();
  console.log(userDB);
  return (
    <div>
      <h1>Account Info</h1>
      <p>Username: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};
export default AccountInfo;
