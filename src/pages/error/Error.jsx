


import React from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sahifa topilmadi!</h2>
        <p className="text-gray-600 mb-6">
          Kechirasiz, siz qidirgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;