import * as yup from "yup";
const passwordRules = /^(?=.\d)(?=.*[a-z])(?=.*[A-Z].{5,}$)/;

export const rulesSchema = yup.object().shape({
  title: yup
    .string()
    .required("Başlık girmek zorunludur"),
  author: yup
    .string()
    .required("Yazar ismi girmek zorunludur"),
  page: yup
    .number()
    .required("Sayfa sayısı girmek zorunludur"),

});



