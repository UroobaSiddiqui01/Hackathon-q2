import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
              <span className="ml-2 text-gray-700">Keep me signed in</span>
            </label>
          </div>

          <div className="mb-6 text-right">
            <Link href="#" className="text-blue-500 hover:underline">Forgotten your password?</Link>
          </div>

          <div className="mb-6">
            <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
              SIGN IN
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            By logging in, you agree to Nike&apos;s <Link href="#" className="text-blue-500 hover:underline">Privacy Policy</Link> and <Link href="#" className="text-blue-500 hover:underline">Terms of Use</Link>.
          </p>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">Not a Member? <Link href="#" className="text-blue-500 hover:underline">Join Us</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
