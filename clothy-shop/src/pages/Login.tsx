import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <form action="">
        <div>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="Type here"
              name="firstName"
              id="firstName"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Type here"
              name="lastName"
              id="lastName"
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
            />
          </div>

          <div>
            <label htmlFor="lastName">Phone number</label>
            <input
              type="text"
              placeholder="Type here"
              name="phoneNumber"
              id="phoneNumber"
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
            />
          </div>

          <div>
            <label htmlFor="password2">Confirm</label>
            <input
              type="password"
              placeholder="Type here"
              name="password2"
              id="password2"
            />
          </div>
        </div>

        <div>
          <p>
            Don't have an account yet? <Link to="/signup">Create one now</Link>
          </p>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
