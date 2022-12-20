import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  password2: string;
};

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  password2: "",
};

const Signup = () => {
  const handleSignup = async (data: Values) => {
    const res = await axios.post("https://r2w7l.mocklab.io/json", data);
    console.log(res.data);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      email: yup.string().email().required(),
      firstName: yup.string().max(100).required(),
      lastName: yup.string().max(100).required(),
      password: yup.string().min(8).required(),
      password2: yup.string().min(8).required(),
    }),
    onSubmit: (values: Values, errors) => {
      if (values.password !== values.password2) {
        return;
      }

      handleSignup(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="Type here"
              name="firstName"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Type here"
              name="lastName"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Type here"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div>
            <label htmlFor="lastName">Phone number</label>
            <input
              type="text"
              placeholder="Type here"
              name="phoneNumber"
              id="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Type here"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <div>
            <label htmlFor="password2">Confirm</label>
            <input
              type="password"
              placeholder="Type here"
              name="password2"
              id="password2"
              onChange={formik.handleChange}
              value={formik.values.password2}
            />
          </div>
        </div>

        <div>
          <p>
            Don't have an account yet?{" "}
            <Link to="/login">Connect to your account</Link>
          </p>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
