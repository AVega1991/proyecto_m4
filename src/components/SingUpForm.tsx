"use client";

import { singupConfig } from "@/config/signupConfig";
import { useState } from "react";
import FormInput from "./FormInput";
import signup from "@/helpers/singup";
import { Toast } from "./Toast";
import { useRouter } from "next/navigation";
import { ISignUpForm } from "@/interfaces/ISignUpForm";
import { usePublic } from "@/hooks/usePublic";

const initialForm: ISignUpForm = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
  address: "",
  phone: "",
};

export default function SignUpForm() {
  usePublic();
  const [form, setForm] = useState<ISignUpForm>(initialForm);
  const router = useRouter();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "", repeatPassword: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    if (form.password !== form.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await signup(form);
        Toast.fire("User created successfully", "", "success");
        router.replace("/auth/login");
      } catch (error: any) {
        Toast.fire(error.response.data.message, "", "error");
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
      className="flex flex-col items-center justify-center h-full bg-gray-300 p-8 rounded-xl"
      style={{ margin: "0 auto" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {singupConfig.map(({ name, label, type, placeholder }) => {
            return (
              <FormInput
                key={name}
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                value={form[name as keyof typeof form]}
                onChange={changeHandler}
              />
            );
          })}
          {errors.email && (
            <p className="text-red-500 col-span-2">{errors.email}</p>
          )}
          {errors.password && (
            <p className="text-red-500 col-span-2">{errors.password}</p>
          )}
          {errors.repeatPassword && (
            <p className="text-red-500 col-span-2">{errors.repeatPassword}</p>
          )}
          <button
            type="submit"
            className="bg-tertiary text-white py-2 px-4 rounded col-span-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
