import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Username"
          id="username"
          required
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="email"
          required
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
          required
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity:80 cursor-pointer">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin" className="text-blue-600 underline">Login</Link>
      </div>
    </div>
  );
}
