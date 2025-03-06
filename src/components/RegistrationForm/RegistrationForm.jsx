import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { toast } from "react-toast";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import c from './RegistrationForm.module.css'

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  // Схема валідації
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3)
      .max(10)
      .required("Required field"),
    email: Yup.string()
      .email("wrong email format")
      .required("Required field"),
    password: Yup.string()
      .min(6)
      .required("Required field"),
  });

  const handleSub = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Success");
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Error"));
    actions.resetForm();
  };

  return (
    <div>
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={handleSub}
      > 
        <Form className={c.allForm}>
          <label className={c.label}>
            <span>Name:</span>
            <Field name="name" className={c.field} />
            <ErrorMessage name="name" component="div" className={c.error} />
          </label>

          <label className={c.label}>
            <span>Email:</span>
            <Field name="email" className={c.field} />
            <ErrorMessage name="email" component="div" className={c.error} />
          </label>

          <label className={c.label}>
            <span>Password:</span>
            <Field name="password" type="password" className={c.field} />
            <ErrorMessage name="password" component="div" className={c.error} />
          </label>

          <button type="submit" className={c.subButton}>Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
