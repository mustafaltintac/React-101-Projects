import * as yup from "yup";
const passwordRules = /^(?=.\d)(?=.*[a-z])(?=.*[A-Z].{5,}$)/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir değer giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter girniz")
    .matches(passwordRules, {
      message:
        "Şifreniz en az bir büyük harf, küçük harf, sembol ve rakamdan oluşmak zorundadır ",
    })
    .required("Şifre girmek zorunludur"),
  comfirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});


export const advanceSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minimum 3 karakterden oluşmalıdır")
    .required("Username girmek zorunludur"),
  university: yup.string().oneOf(
    ["bogazici", "itü", "odtü", "ktü"],
    "Lütfen üniversity seçiniz"
  ).required("Lütfen üniversite seçiniz"),
  isAccepted: yup
    .boolean().oneOf([true],"Kullanım koşullarını kabul ediniz")
  
});
