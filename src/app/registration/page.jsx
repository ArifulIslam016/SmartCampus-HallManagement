"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     studentId: '',
//     phone: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
const {register,handleSubmit,formState:{errors}}=useForm()
 const handlesubmitForm=(data)=>{
    console.log(data)
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-100">
        <h2 className="text-3xl font-extrabold mb-2 text-center text-indigo-600">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">Join the Smart Campus & Hostel Community</p>

        <form onSubmit={handleSubmit(handlesubmitForm)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Arif Islam"
                {...register("Name", { required: true })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Student ID / Roll</label>
              <input
                type="text"
                name="studentId"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="8282.."
                {...register("studentId", { required: true })}
        
              />
              {errors.studentId && <span className="text-red-500 text-sm">Student ID is required</span>}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="name@example.com"
              {...register("email", { required: true })}
              er
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="017XXXXXXXX"
              {...register("phone", { required: true })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="********"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="********"
                {...register("confirmPassword", { required: true })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 shadow-md hover:shadow-lg transform transition active:scale-95 mt-4"
          >
            Register Now
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 font-bold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;