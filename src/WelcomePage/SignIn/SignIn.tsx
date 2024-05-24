import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../ReusableComponnets/InputForm.js";
import { FaArrowLeft } from "react-icons/fa6";
import ErrorForm from "../ErrorForm.js";
const SignIn = ({ ...props }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    props.logInSubmitTC(mail, password);
  };

  useEffect(() => {
    props.loadUserData();
    if (props.isAuthorized) {
      navigate("/d");
    }
  }, [props.isAuthorized]);

  return (
    <div>
      <div
        onClick={props.goBack}
        className={
          "hover:cursor-pointer hover:opacity-70 transition duration-300 inline-block"
        }
      >
        <FaArrowLeft />
      </div>
      {!props.logResponse ? (
        <form className={"bg-neutral-800 p-4 rounded-xl flex flex-col gap-4"}>
          <InputForm placeHolder={"Email"} setInputData={setMail} />
          <InputForm placeHolder={"Password"} setInputData={setPassword} />
          <button
            className={
              "hover:cursor-pointer hover:opacity-70 transition duration-300"
            }
            onClick={(e) => handleLogIn(e)}
          >
            Log In
          </button>
        </form>
      ) : (
        <ErrorForm
          message={props.logResponse.message}
          goBack={props.goBack}
          resetAuthResponse={props.resetAuthResponse}
        />
      )}
    </div>
  );
};

export default SignIn;
