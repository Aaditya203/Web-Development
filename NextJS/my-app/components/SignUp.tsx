"use client"

import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [fullName,setFullName]=useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-blue-600 to-indigo-700 text-white p-12">
          <h1 className="text-4xl font-bold leading-tight">
            Start Your Journey
          </h1>

          <p className="mt-5 text-blue-100 text-lg leading-relaxed">
            Create your account to access personalized learning, track your
            progress, and achieve your goals.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <p>Personalized Dashboard</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <p>Track Your Progress</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <p>Interactive Learning Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-2 text-gray-500">
              Join us today! Fill in your details below.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                onChange={(e)=>{
                    setFullName(e.target.value);
                }}
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border text-black px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <button onClick={()=>{
                axios.post("http://localhost:3000/api/user",{
                    username:fullName,
                    email:email,
                    password:password
                })
              }} className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                Create Account
              </button>
            </div>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="text-sm text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-50">
                Google
              </button>

              <button className="rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-50">
                GitHub
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}