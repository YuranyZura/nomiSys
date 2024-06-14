import "boxicons/css/boxicons.min.css";

const Start = () => {
  return (
    <div className="start">
      <header className="header">
        <a href="#" className="logo">
          <img src="src/assets/logo.png" className="h-[15vh]" />
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#servicios">Services</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="home-inicio">
          <h1>NomiSys</h1>
          <h3>Register your company</h3>
          <p>
            Register your company so you have your own program where you can
            manage everything from one website! You will manage with your
            administrators, secretaries and your entire work team. In addition,
            you will be able to review payroll and manage all aspects of your
            company directly from your web platform.
          </p>
          <div className="btn-box">
            <a href="/login">Login</a>
            <a href="/signup">Sign In</a>
          </div>
        </div>
        <div className="home-imagen">
          <img src="src/assets/img.png" alt="Descripción de la imagen" />
        </div>
        <div className="home-sci">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <img src="src/assets/img.png" alt="Acerca de imagen" />
          <div className="about-text">
            <h2>
              About <span>Me</span>
            </h2>
            <h3>Payroll Manager</h3>
            <p>
              Welcome to NomiSys! At NomiSys, we take care of simplifying the
              management of your company. From employee registration to payroll
              generation, our goal is to put all the control in your hands. With
              us, you will have access to tools that will allow you to supervise
              daily tasks, manage your team and generate payroll quickly and
              easily. Trust us to take your company to the next level. We are
              here to help you achieve your goals!
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>
          My <span>Services</span>
        </h2>
        <div className="service-box">
          <div className="service-item">
            <i className="bx bx-buildings"></i>
            <h3>Business Design and Management</h3>
            <p>
              {" "}
              We take care of the design and registration of your company,
              including the registration of employees, administrators and
              supervisors. Each of them will have an exclusive user to send
              information to the owner of the company.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="service-item">
            <i className="bx bx-money"></i>
            <h3>Payroll Generation</h3>
            <p>
              With our system, you can easily generate payrolls for all the
              activities carried out in the month, week or even day,
              guaranteeing efficient management of your resources.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="service-item">
            <i className="bx bx-folder-plus"></i>
            <h3>Business Registry</h3>
            <p>
              We offer you the possibility of registering multiple companies and
              their workers. Our platform not only allows you to register a
              company, but also allows you to add all the companies you want
              along with their respective workers
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>
          Contact <span>Me</span>
        </h2>
        <form>
          <div className="input-box">
            <input type="text" name="fullName" placeholder="full Name" />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="emailSubject"
              placeholder="Email Subject"
            />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Start;
