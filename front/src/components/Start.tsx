import "boxicons";

const Start = () => {
  return (
    <div className="start">
      <header className="header">
        <a href="#" className="logo">
          <img src="src/assets/logo.png" className="h-[15vh]" />
        </a>
        <nav className="navbar">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </nav>
      </header>
      <section className="home">
        <div className="home-inicio">
          <h1>NomiSys</h1>
          <h3>register your company </h3>
          <p>
            Register your company so you have your own program where you can
            manage everything from one website! You will manage with your
            administrators, secretaries and your entire work team. In addition,
            you will be able to review payroll and manage all aspects of your
            company directly from your web platform.
          </p>
          <div className="btn-box">
            <a href="/login">inicia sesion</a>
            <a href="/signup">Registrate</a>
          </div>
        </div>
        <div className="home-imagen">
          <img src="src/assets/img.png" alt="Descripción de la imagen" />
        </div>
      </section>
    </div>
  );
};

export default Start;
