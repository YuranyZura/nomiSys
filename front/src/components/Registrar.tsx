import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

export default function Registrar() {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Email, setEmail] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Cedula, setCedula] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [Fecha_registro, setFecha_registro] = useState('');
  const [Fecha_nacimiento, setFecha_nacimiento] = useState('');
  const [Pais, setPais] = useState('');

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();
    const auth = getAuth();
    const db = getFirestore();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, Email, Contraseña);
      const userInfo = { Nombre, Apellido, Telefono, Cedula, Direccion, Fecha_registro, Fecha_nacimiento, Pais };
      await setDoc(doc(db, "users", userCredential.user.uid), userInfo);
      console.log('Usuario registrado:', userCredential.user);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <div className="registro" > 
    <form onSubmit={handleRegistration}>
    <div className="titulo">
      <div className="input-container">
        <input type="text" placeholder='Nombre' name="Nombre" onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder='Apellido' name="Apellido" onChange={(e) => setApellido(e.target.value)} />
        <input type="text" placeholder='Email' name="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Contraseña' name="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
        <input type="text" placeholder='Teléfono' name="Telefono" onChange={(e) => setTelefono(e.target.value)} />
        <input type="text" placeholder='Cédula' name="Cedula" onChange={(e) => setCedula(e.target.value)} />
        <input type="text" placeholder='Dirección' name="Direccion" onChange={(e) => setDireccion(e.target.value)} />
        <input type="text" placeholder='País' name="Pais" onChange={(e) => setPais(e.target.value)} />
      
    
        <input type="date" name="Fecha_registro" onChange={(e) => setFecha_registro(e.target.value)} />
        <input type="date" name="Fecha_nacimiento" onChange={(e) => setFecha_nacimiento(e.target.value)} />
      </div>
    </div>
    <div className="btn">
      <button type="submit">Registrar</button>
    </div>
  </form>
</div>

  );
}