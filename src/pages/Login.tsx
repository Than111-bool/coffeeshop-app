import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-amber-900">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Login to your Coffee Shop account
        </p>

       
        <div className="mb-4">
          <label className="mb-2 block font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border p-3 outline-none focus:border-amber-700"
          />
        </div>

        
        <div className="mb-4">
          <label className="mb-2 block font-semibold">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border p-3 pr-12 outline-none focus:border-amber-700"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        
        <div className="mb-5 flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className="text-amber-700 hover:underline">
            Forgot Password?
          </a>
        </div>

        
        <button className="w-full rounded-lg bg-amber-900 py-3 text-white transition hover:bg-amber-800">
          Login
        </button>

        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-amber-700">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;