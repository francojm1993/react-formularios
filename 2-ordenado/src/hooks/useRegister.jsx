import { useState } from "react";

//Importamos la URL de la API para hacer las peticiones:
import { URL_API } from "../utils/URL";
//Importamos la instancia de Fetch para poder manejar peticiones al servidor:
import { FetchApi } from "../helpers/FetchApi";

/**  HOOK PERSONALIZADO:  **/
//Recibe como parámetro el state inicial:
const useRegister = (initialState) => {
  //State del formulario:
  const [form, setForm] = useState(initialState);
  //State de mensaje al registrar:
  const [msg, setMsg] = useState("");
  //State de un loading de carga:
  const [loading, setLoading] = useState(false);

  /**  HANDLE CHANGE  **/
  //Función para actualizar el valor del state cada vez que se escriba en el formulario:
  const handleChange = (e) => {
    //destructuramos las propiedades del input target:
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**  HANDLE SUBMIT  **/
  const handleSubmit = (e) => {
    e.preventDefault();

    //Activamos el loader y realizamos la petición:
    setLoading(true);
    FetchApi.postData(`${URL_API}/user/register`, form, "").then((res) => {
      //desactivamos el loader:
      setLoading(false);
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

  /** RETURNS  **/
  {
    /* Estos son los datos que brinda este hooks personalizado*/
  }
  return { form, handleChange, handleSubmit, msg, loading };
};

export default useRegister;
