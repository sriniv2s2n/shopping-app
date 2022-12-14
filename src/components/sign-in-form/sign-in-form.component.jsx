import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { setCurrentUser } from "./../../store/user/user.action";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentUser(formFields.email));
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          labelOptions={{ label: "Email ID" }}
          inputOptions={{
            type: "email",
            required: true,
            name: "email",
            onChange: onChangeHandler,
            value: email,
          }}
        />
        <FormInput
          labelOptions={{ label: "Password" }}
          inputOptions={{
            type: "password",
            required: true,
            name: "password",
            onChange: onChangeHandler,
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type={"submit"}>Sign In</Button>
          <Button type={"button"} buttonStyle={"google"}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
