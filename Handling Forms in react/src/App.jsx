import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(4);
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            placeholder="Username here"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
            name="username"
          />
          {errors.username && (
            <div className="error">{errors.username.message}</div>
          )}
        </div>

        <div className="form-group">
          <input
            placeholder="Password here"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
            })}
            type="password"
            name="password"
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>

        <input disabled={isSubmitting} type="submit" value="Submit" />
        {isSubmitting && <div className="loading">Loading...</div>}
      </form>
    </div>
  );
}

export default App;
