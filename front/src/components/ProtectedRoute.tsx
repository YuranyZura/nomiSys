import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
  });
};

export default ProtectedRoute;
