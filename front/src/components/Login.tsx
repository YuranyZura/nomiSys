
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase';



export const Login = () => {
   
  const functioAutenticacion = async(e) =>{
    e.preventDefault(); 
    

    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
     
    try {
     
      await signInWithEmailAndPassword(auth, correo, contraseña)
    } catch (error){
      console.log("pasa por aqui",error)
      alert ("correo o contraseña son incorrecto")
    }
  }


  return (
  <div className="login"> 
    <div className='card-box'> 
      <div className='information'> 
        <h1>¡Hi!</h1>
        <h2>b i e n v e n i d o</h2>
        <p>.........................</p>
        <div className='social-media'> 
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a><i className="bi bi-facebook"></i></a>
          <a><i className="bi bi-instagram"></i></a>
        </div>
         <span>oscardigital.website</span>
      </div>
      <div className='form'> 
        <h2>Iniciar sesion</h2>
        <div className='data'> 
        <form onSubmit={functioAutenticacion}>
          <input type="text" placeholder='Enter email' className='cajatexto' name="email" />
          <input type='password' placeholder='Enter password' className='cajacontraseña' name="password" />
          
          </form>
        </div>

        <div className='recover'> 
        </div>
        <button className="btnform">Login</button>
      </div>
    </div> 
 </div>
  );
}

export default Login 
