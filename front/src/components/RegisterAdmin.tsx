import { useState } from "react";
import { Button } from "./ui/button";
function RegisterAdmin() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="RegistroAdmin">
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder=""
      />
      <form>
        <input
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          type="text"
          placeholder=""
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="*********"
        />
        <Button
          className="bg-red-500"
          id="btn-enviar"
          type="button"
          onClick={() => {
            console.log(nombre);
            console.log(password);
          }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default RegisterAdmin;
