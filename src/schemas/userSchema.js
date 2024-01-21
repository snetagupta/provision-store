import  * as yup from "yup";

const LogInSchema = yup.object().shape({
  password: yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
});

export default LogInSchema;