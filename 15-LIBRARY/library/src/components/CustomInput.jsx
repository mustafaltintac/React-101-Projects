import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useContext, useFormik } from "react";
import users from "./users";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { MainContext } from "../contex";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

function CustomInput() {
  const { isLogin,flag, toggleIslogin } = useContext(MainContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("İsim girmek zorunludur"),
              password: Yup.string()
                .min(5, "Lütfen minimum 5 karakter girniz")
                .matches(passwordRules, {
                  message:
                    "Şifreniz en az bir büyük harf, küçük harf, sembol ve rakamdan oluşmak zorundadır ",
                })
                .required("Şifre girmek zorunludur"),
            })}
            onSubmit={(values, { resetForm }) => {
              let x = users.findIndex(
                (user) =>
                  user.username == values.username &&
                  user.password == values.password
              );
              if (x > -1) {
                toggleIslogin(true);
                setTimeout(() => {
                  window.location.href = "/";
                }, 2000);
              }
              else{
                toggleIslogin(false);
              }
            }}
          >
            {({ values, errors, handleSubmit, handleChange, resetForm }) => (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <h2 style={{ textAlign: "center" }}> Login Ekranı</h2>
                <TextField
                  name="username"
                  id="outlined-basic"
                  label="Kullanıcı adı"
                  variant="outlined"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username ? (
                  <div style={{ color: "red", fontSize: 10 }}>
                    {errors.username}
                  </div>
                ) : (
                  <div></div>
                )}
                <TextField
                  type="password"
                  name="password"
                  id="outlined-basic"
                  label="Şifre  "
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password ? (
                  <div style={{ color: "red", fontSize: 10 }}>
                    {errors.password}
                  </div>
                ) : (
                  <div></div>
                )}
                <Button variant="contained" type="submit">
                  Giriş
                </Button>
                {isLogin == true ? (
                  <Alert severity="success"> Giriş Başarılı Yönlendiriliyosunuz</Alert>
                ) : 
                (flag ?(
                  <></>
                ):(<Alert severity="error"> Kullanıcı Adı Veya Şifre Hatalı</Alert>))}
              </form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CustomInput;
