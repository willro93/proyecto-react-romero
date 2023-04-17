import { useState } from "react";
import style from "./Form.module.css"

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length == 0) {
      alert("Es obligatorio agregar un nombre");
      return;
    }

    if (userData.lastname.length == 0) {
      alert("Es obligatorio agregar un apellido");
      return;
    }

    const incluir = userData.email.includes("@");

    if (!incluir) {
      alert("email no válido");
      return;
    }

    const tring = userData.password.trim();
    const valid = userData.password === tring;

    if (!valid || userData.password.length < 7) {
      alert(
        "Ingrese una contraseña válida de al menos 7 caracteres sin espacios al pricipio ni al final"
      );
      return;
    }

    alert("Se ha registrado correctamente");
  };

  return (
    <div className={style.formPosition}>
      <h1>Regístrate para recibir notificaciones y promociones</h1>
      <form onSubmit={handleSubmit} className={style.inputPosition}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          onChange={handleChange}
          name="lastname"
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese su contraseña"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar formulario</button>
      </form>
    </div>
  );
};

export default Form;
