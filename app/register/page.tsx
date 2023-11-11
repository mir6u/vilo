"use client";
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Please fill all the fields");
    }

    try {
      await axios.post("/api/register", { email, password, name });
      console.log("Registration successful");
      signIn("credentials", {
        email,
        password,
        name,
        callbackUrl: "http://localhost:3000/profile",
      });
    } catch (error: any) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <p className="text-white">{error}</p>
        <button type="submit" className="text-white">
          Register
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
