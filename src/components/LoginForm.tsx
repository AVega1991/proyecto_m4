"use client";

import { useState } from "react";
import FormInput from "./FormInput";
import { Toast } from "./Toast";
import { useAuth } from "@/contexts/AuthContext";
import { usePublic } from "@/hooks/usePublic";

export default function LoginForm() {
  usePublic();
  const { login } = useAuth();

  const [form, setForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Password validation
    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await login(form);
        Toast.fire("User logged in succesfully", "", "success");
      } catch (error: any) {
        const errorMessage = error.response.data.message;

        const messageToShow = [
          "Invalid password",
          "User does not exist",
        ].includes(errorMessage)
          ? "Invalid credentials"
          : errorMessage;

        Toast.fire(messageToShow, "", "error");
      }
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-300 p-8 rounded-xl"
      style={{ margin: "0 auto" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div>
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={form.email}
              onChange={changeHandler}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <FormInput
              type="password"
              name="password"
              label="Password"
              value={form.password}
              onChange={changeHandler}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          {/* Add submit button */}
          <button
            type="submit"
            className="bg-tertiary text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
