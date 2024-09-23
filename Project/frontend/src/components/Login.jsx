import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from 'react-router-dom';

const Login = () => {
  // Validation schema using Zod for form validation
  const validationSchema = z.object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid Email'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded">
      <div className="w-1/2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl text-blue-500 font-semibold text-center">
          Welcome! Log In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-blue-500 font-medium">Email</label>
              <input
                type="email"
                className={`p-2 border w-[95%] my-2 rounded shadow-xl ${
                  errors.email ? 'border-red-500 outline-none' : 'border-gray-500 outline-blue-500'
                }`}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="text-blue-500 font-medium">Password</label>
              <input
                type="password"
                className={`p-2 border w-[95%] my-2 rounded shadow-xl ${
                  errors.password ? 'border-red-500 outline-none' : 'border-gray-500 outline-blue-500'
                }`}
                {...register('password')}
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <button className="bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600">
            Log In
          </button>
        </form>

        {/* Links for "Forgot Password" and "Sign Up" */}
        <div className="text-center">
          <Link to="/Forgotpassword" className="text-blue-500 underline hover:text-blue-700">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/Signup" className="text-blue-500 underline hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
