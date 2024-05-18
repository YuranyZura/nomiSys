import { useState } from 'react';

function EmpresaForm() {
  const [Nit, setNit] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [Pais, setPais] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [Fecha_de_creacion, setFecha_de_creacion] = useState('');
  const [Fecha_registro, setFecha_registro] = useState('');

  const handleRegistro = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { Nit, nombre, direccion, telefono, Pais, Correo, Contraseña, Fecha_de_creacion, Fecha_registro };
    console.log(data);
  };

  return (
    <form onSubmit={handleRegistro}>
      <label>
        Nit de la empresa:
        <input
          type="text"
          value={Nit}
          onChange={(e) => setNit(e.target.value)}
          required
        />
      </label>
      <label>
        Nombre de la empresa:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>
      <label>
        Direccion de la empresa:
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
      </label>
      <label>
        Telefono de la empresa:
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </label>
      <label>
        Pais de residencia de la empresa:
        <input
          type="text"
          value={Pais}
          onChange={(e) => setPais(e.target.value)}
          required
        />
      </label>
      <label>
        Correo de la empresa:
        <input
          type="text"
          value={Correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </label>
      <label>
        Contraseña del correo de la empresa:
        <input
          type="password"
          value={Contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha de creacion de la empresa:
        <input
          type="date"
          value={Fecha_de_creacion}
          onChange={(e) => setFecha_de_creacion(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha de registro de la empresa:
        <input
          type="date"
          value={Fecha_registro}
          onChange={(e) => setFecha_registro(e.target.value)}
          required
        />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default EmpresaForm;