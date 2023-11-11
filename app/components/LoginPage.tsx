'use client'
import axios from "axios";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

interface Props {
  className?: string;
}

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Please fill all the fields");
    }

    try {;
      console.log("Login successful");
      signIn("credentials", {
        email,
        password,
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
        <p className="text-white">{error}</p>
        <button type="submit" className="text-white">
          Log In
        </button>
      </form>
    </main>
  )
};

export default LoginPage;
