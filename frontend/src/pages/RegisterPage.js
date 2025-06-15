import React, { useState } from "react";
import Navbar from "../components/HomeNavbar.jsx";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    alert("Registered successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row h-screen w-full bg-gray-900">
        <div className="sm:w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl text-white font-bold text-center mb-6">
              Register
            </h2>

            <div className="mb-4">
              <label className="block text-gray-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {error && (
              <p className="text-red-500 text-center font-medium mb-4">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200"
            >
              Register
            </button>

            <p className="mt-4 text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-teal-400 hover:underline font-semibold"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
