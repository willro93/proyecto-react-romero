import style from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className={style.navbarStyle}>
      <Link to={"/"}>
        <img
          src="/logo.png"
          style={{ width: 60, height: 60, marginTop: 7 }}
          alt="img-logo"
        />
      </Link>
      <ul className={style.navbarMenu}>
        <Link to={"/category/shampoo"} style={{ textDecoration: "none" }}>Shampoo Sólido</Link>
        <Link to={"/category/acondicionador"} style={{ textDecoration: "none" }}>Acondicionador Sólido</Link>
        <Link to={"/category/hotoil"} style={{ textDecoration: "none" }}>Hot Oil</Link>
        <Link to={"/category/desodorante"} style={{ textDecoration: "none" }}>Desodorante Sólido</Link>
      </ul>
      <Link to={"/formulario"}><PersonIcon style={{width: 50, height: 50, marginTop: 7}} /></Link>
      <CartWidget />
      
      
    </div>
  );
};
export default Navbar;
