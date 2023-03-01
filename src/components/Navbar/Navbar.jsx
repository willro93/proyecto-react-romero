import style from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
  return (
    <div className={style.navbarStyle}>
      <img src="/logo.png" style={{ width: 60, height: 60, marginTop: 7}} alt="img-logo" />
      <ul className={style.navbarMenu}>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
