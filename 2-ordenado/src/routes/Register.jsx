//Importamos el archivo CSS de esta ruta:
import "../css/register/Register.css";

//Importamos el hook personalizado con las funciones necesarias para registrar usuarios:
import useRegister from "../hooks/useRegister";

//Importamos el componente Loader de carga:
import Loader from "../components/accesorios/Loader";
import FormRegister from "../components/register/FormRegister";

//Definimos los valores iniciales del formulario:
const initialState = { username: "", mail: "", password: "" };

const Register = () => {
  //Destructuramos las funciones y states que brinda el hook:
  const { form, handleChange, handleSubmit, msg, loading } =
    useRegister(initialState);
  return (
    <div>
      <h1>Register</h1>

      {/** FORMULARIO DE REGISTRO **/}
      <FormRegister
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/** LOADER DE CARGA  **/}
      {loading && <Loader />}

      {/**  MENSAJE DEL SERVIDOR  **/}
      {msg && (
        <div className="container-msg">
          <p className="msg-p">{msg} </p>
        </div>
      )}
    </div>
  );
};

export default Register;
