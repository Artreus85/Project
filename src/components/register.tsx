"use client"

import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md w-full max-w-md mx-auto">
      <h2 className="text-center text-xl font-bold mb-6">Създаване на профил</h2>

      {/*Registration form*/}
      <form>
        {/*Username field*/}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Име</label>

          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Въведете вашето име"
          />
        </div>

        {/*Username field*/}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-sm font-medium">Потребителско име</label>

          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Въведете потребителско име"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">Имейл</label>

          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="example@email.com"
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block mb-1 text-sm font-medium">Парола</label>

          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Въведете парола"
          />

          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            👁️
          </button>
        </div>

        <div className="mb-4 relative">
          <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">Потвърди паролата</label>

          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Потвърдете паролата"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            👁️
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md p-2 font-medium hover:bg-blue-700 transition"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
