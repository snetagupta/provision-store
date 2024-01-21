import React from "react";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LogInSchema from "../schemas/userSchema";
import { Container } from "react-bootstrap";
import sha256 from "crypto-js/sha256";
import storeAPI from "../api/storeAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LogIn = () => {
  const { setAuthData } = useAuth();

  const signIn = async (email, password) => {
    try {
      const hashedPassword = sha256(password).toString();

      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", hashedPassword);
      formData.append("grant_type", "password");

      const options = {
        method: "post",
        url: "https://apiv2stg.promilo.com/user/oauth/token",
        headers: {
          Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      };

      const res = await storeAPI(options);
      setAuthData(res.data.response);

      navigate("/product");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const navigate = useNavigate();

  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100 w-100 "
      style={{ maxWidth: "30rem" }}
    >
      <section className="w-100 border p-4 bg-light ">
        <h1 className="mb-5 text-info text-center">LogIn Form</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LogInSchema}
          onSubmit={({ email, password }) => {
            signIn(email, password);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
            isValid,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Form.Text className="text-danger">
                  {errors.email && touched.email && errors.email}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Form.Text className="text-danger">
                  {errors.password && touched.password && errors.password}
                </Form.Text>
              </Form.Group>

              <Button
                variant="info"
                disabled={!(dirty && isValid)}
                type="submit"
                className="w-100 "
                // onClick={() => navigate("/product")}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </section>
    </Container>
  );
};

export default LogIn;
