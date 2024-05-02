import { useState } from "react"
function RegisterAdmin() { 
    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("") 
    return (
        <div className="pagina"> 
            <form> 
            <input value={nombre} onChange={(event)=>setNombre(event.target.value)} type="text" placeholder="Yurany"/>
            <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="*********"/>
            <button id="btn-enviar" type="button" onClick={()=>{
                console.log(nombre)
                console.log(password)
                }}>Enviar</button> 
            </form>
        </div>
    )
}

export default RegisterAdmin