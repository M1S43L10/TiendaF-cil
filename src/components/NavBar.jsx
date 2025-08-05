import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Logo Tienda Fácil" width="30" height="30" />
          <strong>Tienda Fácil</strong>
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mis pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ayuda</a>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
