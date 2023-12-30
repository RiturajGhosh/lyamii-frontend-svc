import * as Yup from "yup";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

export const validate = Yup.object().shape({
  email: Yup.string()
    .min(0, "Invalid emailId")
    .max(50, "emailId cannot be more than 30 characters")
    .required("emailId is required")
    .matches(emailRegex, "Invalid EmailId"),
  userName: Yup.string()
    .min(0, "Invalid userName")
    .max(20, "userName cannot be more than 30 characters")
    .required("userName is required"),
  password: Yup.string()
    .min(6, "Invalid password")
    .max(40, "password cannot be more than 30 characters")
    .required("password is required")
    .matches(passwordRegex, "Invalid password"),
});
