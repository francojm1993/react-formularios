import { useState } from "react";

//Importamos el archivo CSS de esta ruta:
import "./Register.css";
//Importamos la instancia de Fetch para realizar peticiones al servidor:
import { FetchApi } from "./FetchApi";

//Definimos los valores iniciales del formulario:

const initialState = { username: "", mail: "", password: "" };

const Register = () => {
  //State del formulario:
  const [form, setForm] = useState(initialState);
  //State de mensaje al registrar:
  const [msg, setMsg] = useState("");

  /**  HANDLE CHANGE  **/
  //Función para actualizar el valor del state cada vez que se escriba en el formulario:
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**  HANDLE SUBMIT  **/
  const handleSubmit = (e) => {
    e.preventDefault();
    FetchApi.postData(
      "https://sharknetapi.onrender.com/api/v1/user/register",
      form,
      ""
    ).then((res) => {
      setMsg("");
      //si no hay respuesta:
      if (!res) return setMsg("ERROR REGISTRANDO");
      //Si la respuesta no es satisfactoria:
      else if (res.status !== 201) return setMsg(res.msg);
      else if (res.status === 201) {
        setForm(initialState);
        setMsg("REGISTRADO CON ÉXITO");
      }
    });
  };

  return (
    <div>
      <h1>Register</h1>

      {/** FORMULARIO DE REGISTRO **/}

      <form className="form-register" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={form.username || ""}
        />
        <input
          type="mail"
          name="mail"
          placeholder="mail"
          onChange={handleChange}
          value={form.mail || ""}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={form.password || ""}
        />
        <button>Submit</button>
      </form>

      {/**  MENSAJE DEL SERVIDOR  **/}
      {msg && <p>{msg} </p>}
    </div>
  );
};

export default Register;
