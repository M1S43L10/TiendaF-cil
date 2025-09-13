import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo Tienda Fácil" width="30" height="30" />
          <strong>Tienda Fácil</strong>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/bebidas">Bebidas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/almacen">Almacén</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/perfumeria">Perfumería</NavLink>
            </li>
          </ul>
          <Link to="/cart"><CartWidget /></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
