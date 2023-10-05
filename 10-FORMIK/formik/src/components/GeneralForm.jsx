import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";
import { Link } from "react-router-dom";

const onSubmit = async (values,action) => {
  await new Promise((resolve)=>{
    setTimeout(resolve,1000)

  })
  action.resetForm();
};

export default function GeneralForm() {
  const { values, errors,isSubmitting ,handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      comfirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label> Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail Adresinizi Giriniz"
          className={errors.email ? "input-error" : ""}

        />
        {errors.email && <p className="error">{errors.email};</p>}
      </div>
      <div className="inputDiv">
        <label> Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı  Giriniz"
          className={errors.age ? "input-error" : ""}

        />
        {errors.age && <p className="error">{errors.age};</p>}
      </div>
      <div className="inputDiv">
        <label> Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şİfrenizi  Giriniz"
          className={errors.age ? "input-error" : ""}

        />
        {errors.password && <p className="error">{errors.password};</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrarı</label>
        <input
          type="password"
          value={values.comfirmPassword}
          onChange={handleChange}
          id="comfirmPassword"
          placeholder="Şİfrenizi Tekrar  Giriniz"
          className={errors.comfirmPassword ? "input-error" : ""}
        />
        {errors.comfirmPassword && <p className="error">  {errors.comfirmPassword};</p>}
      </div>
      <button disabled={isSubmitting} type="submit"> Kaydet </button>
      <Link  to="/portal" className="link">Portala Git</Link>

    </form>
  );
}
