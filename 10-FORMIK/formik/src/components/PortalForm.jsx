import React from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { Form, Formik } from "formik";
import { advanceSchema } from "../schemas";
import CustomCheckBox from "./CustomCeckBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

export default function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onsubmit}
        validationSchema={advanceSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="Kullancı Adı"
              name="username"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz "
              name="university"
              placeholder="Universitnizi  Seçiniz"
            >
              <option value=""> Lütfen üniversitenizi seçiniz </option>
              <option value="bogazici"> Boğaziçi </option>
              <option value="itü"> İtü </option>
              <option value="odtü">Odtü</option>
              <option value="ktü">Ktü </option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted"/>
            <button disabled={isSubmitting} type="submit">Kaydet</button>
            <Link to="/" className="link"> Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
