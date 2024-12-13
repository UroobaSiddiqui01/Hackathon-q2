import React from 'react';
import Link from 'next/link';

const Joinus: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg  w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">BECOME A NIKE MEMBER</h1>
        <p className="text-center mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
        </p>
        
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="text"
              id="dob"
              name="dob"
              placeholder="dd/mm/yyyy"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <p className="text-gray-600 text-sm mt-2">Get a Nike Member Reward every year on your Birthday.</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="India">India</option>
              <option value="pakistan">pakistan</option>
              <option value="Russia">Russia</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="United States">United States</option>
              <option value="Brazil">Brazil</option>
              <option value="Australia">Australia</option>
              <option value="Kazakhstan">Kazakhstan</option>

              {/* Add other countries as needed */}
            </select>
          </div>

          <div className="mb-4">
            <span className="block text-gray-700 text-sm font-bold mb-2">Gender</span>
            <label className="inline-flex items-center mr-4">
              <input type="radio" name="gender" value="Male" className="form-radio h-4 w-4 text-blue-500" />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="Female" className="form-radio h-4 w-4 text-blue-500" />
              <span className="ml-2">Female</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
              <span className="ml-2 text-gray-700">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</span>
            </label>
          </div>

          <div className="mb-6">
            <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
              JOIN US
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            By creating an account, you agree to Nike&apos;s <Link href="#" className="text-blue-500 hover:underline">Privacy Policy</Link> and <Link href="#" className="text-blue-500 hover:underline">Terms of Use</Link>.
          </p>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">Already a Member? <Link href="signin" className="text-blue-500 hover:underline">Sign In</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default Joinus;