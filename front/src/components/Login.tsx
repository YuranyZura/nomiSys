import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  fetchSignInMethodsForEmail,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const providers = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
  };

  const handleSigninGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error al iniciar sesion con Google",
        action: (
          <ToastAction altText="Probar de nuevo">Probar de nuevo</ToastAction>
        ),
      });
    }
    navigate("/dashboard");
  };

  const handleSigninGithub = async () => {
    const githubProvider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const provider = providers.github;
        signInWithRedirect(auth, provider);
      } else {
        toast({
          variant: "destructive",
          title: "Error al iniciar sesion con Github",
          action: (
            <ToastAction altText="Probar de nuevo">Probar de nuevo</ToastAction>
          ),
        });
      }
    }
  };

  const functioAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, correo, contraseña);
      navigate("/dashboard")
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Usuario o contraseña incorrecta",
        action: (
          <ToastAction altText="Probar de nuevo">Probar de nuevo</ToastAction>
        ),
      });
    }
  };

  return (
    <div className="login">
      <div className="card-box">
        <div className="information">
          <h1>¡Hola!</h1>
          <h2>b i e n v e n i d o</h2>
          <p>.........................</p>
          <div className="social-media">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a>
              <i className="bi bi-facebook"></i>
            </a>
            <a>
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <span>oscardigital.website</span>
        </div>
        <div className="form my-8 ">
          <h2 className="font-bold text-2xl">Iniciar sesion</h2>
          <div className="data">
            <form onSubmit={functioAutenticacion} className="mt-2">
              <input
                type="text"
                placeholder="Ingrese email"
                className="rounded-md h-8 bg-red-500 mt"
                name="email"
              />
              <input
                type="password"
                placeholder="Ingrese contraseña"
                className="cajacontraseña h-8 rounded-md mt-2 "
                name="password"
              />
              <button className="btnform mt-4 " type="submit">
                Iniciar sesion
              </button>
            </form>
          </div>

          <div>
            <button className="flex items-center justify-center py-2 px-10 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-sm h-8 w-64 mx-auto">
              <svg
                viewBox="0 0 24 24"
                height="25"
                width="25"
                y="0px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
                  fill="#F44336"
                ></path>
                <path
                  d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
                  fill="#2196F3"
                ></path>
                <path
                  d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
                  fill="#FFC107"
                ></path>
                <path
                  d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
                  fill="#00B060"
                ></path>
                <path
                  opacity=".1"
                  d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
                ></path>
                <polygon
                  opacity=".1"
                  points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"
                ></polygon>
                <path
                  d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z"
                  fill="#E6E6E6"
                ></path>
                <path
                  opacity=".2"
                  d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z"
                  fill="#FFF"
                ></path>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="12"
                  y1="12"
                  x2="24"
                  x1="0"
                  id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1"
                >
                  <stop stopOpacity=".2" stopColor="#fff" offset="0"></stop>
                  <stop stopOpacity="0" stopColor="#fff" offset="1"></stop>
                </linearGradient>
                <path
                  d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z"
                  fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"
                ></path>
                <path
                  opacity=".1"
                  d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z"
                ></path>
                <path
                  opacity=".2"
                  d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z"
                  fill="#FFF"
                ></path>
              </svg>
              <span className="ml-2" onClick={handleSigninGoogle}>
                Iniciar con Google
              </span>
            </button>
            <button className="flex items-center justify-center py-2 px-10 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-sm h-8 w-64 mx-auto mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="ml-2" onClick={handleSigninGithub}>
                Iniciar con Github
              </span>
            </button>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                to="/signup"
              >
                o registrarse
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>

          <div className="recover"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
