import React from "react";
import "../../css/register/FormRegister.css";
const FormRegister = ({ handleSubmit, form, handleChange }) => {
  return (
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
  );
};

export default FormRegister;
