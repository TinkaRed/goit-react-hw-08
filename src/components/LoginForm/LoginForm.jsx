import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { Field, Form, Formik } from "formik";
import { loginThunk } from "../../redux/auth/operations";
import Modal from "react-modal";
import { useState } from "react";
import c from "./LoginForm.module.css";

Modal.setAppElement("#root");

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSub = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Login successful");
        navigate("/contacts", { replace: true });
      })
      .catch(() => {
        toast.error("Invalid credentials");
        setIsModalOpen(true);
      });

    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSub}>
        <Form className={c.allForm}>
          <label className={c.label}>
            <span>Email:</span>
            <Field name="email" className={c.field} />
          </label>
          <label className={c.label}>
            <span>Password:</span>
            <Field name="password" type="password" className={c.field} />
          </label>
          <button type="submit" className={c.subButton}>
            Login
          </button>
        </Form>
      </Formik>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className={c.modal}
        overlayClassName={c.overlay}
      >
        <h2>Login error</h2>
        <p>The user not found. Check the entered data</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default LoginForm;
