import Image from 'next/image';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-lg ">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-4 text-center">GET HELP</h1>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="border border-gray-300 p-2 rounded-lg w-full max-w-md"
            />
          </div>

          {/* Payment Options */}
          <h2 className="text-xl font-semibold mb-2">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className="mb-4">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-4">
            If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          <p className="mb-6">
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.
          </p>

          {/* Buttons */}
          <div className="flex justify-start mx-2 items-center mb-8">
            <a href="/joinus" className="bg-black mx-2 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
              JOIN US
            </a>
            <button className="bg-black text-white mx-2 py-2 px-4 rounded-full hover:bg-gray-800 transition">
              SHOP NIKE
            </button>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <div className="mb-4">
            <p className="font-medium">Does my card need international purchases enabled?</p>
            <p className="mb-4 text-gray-700">
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. Please note, some banks may charge a small transaction fee for international orders.
            </p>
            <p className="font-medium">Can I pay for my order with multiple methods?</p>
            <p className="mb-4 text-gray-700">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
            <p className="font-medium">What payment method is accepted for SNKRS orders?</p>
            <p className="mb-4 text-gray-700">You can use any accepted credit card to pay for your SNKRS order.</p>
            <p className="font-medium">Why don&apos;t I see Apple Pay as an option?</p>
            <p className="mb-4 text-gray-700">
              To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
            </p>
          </div>

          {/* Related */}
          <h2 className="text-xl font-semibold mb-4">RELATED</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
            <li>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</li>
          </ul>

          {/* Feedback */}
          <h2 className="text-xl font-semibold mb-4">Feedback</h2>
          <div className="flex space-x-4 mb-6">
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">👍</button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">👎</button>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* Contact Us Section */}
        <div className=" lg:w-1/3 bg-white p-6 rounded-lg ">
          <h2 className="flex flex-col items-center text-xl font-semibold mb-10">CONTACT US</h2>
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/mobile.png"
              alt="Phone"
              width={64}
              height={64}
              className="mb-6"
            />
            <p className="text-gray-700">000 800 919 0566</p>
          </div>
          <p className="flex flex-col items-center mb-10 text-gray-700">
            Products & Orders: 24 hours a day<br /> 7 days a week<br />
            Company Info & Enquiries: 07:30 <br /> 16:30, Monday - Friday
          </p>
          <h2 className="text-xl font-semibold mb-4"></h2>
          <div className="flex flex-col items-center mb-10 ml-8">
           
            <div className="flex flex-col text-center  ">
              <Image src="/masseg.png" alt="Message" width={64} height={64} className="mb-10" />
              <p className="text-gray-700">24 hours a day<br /> 7 days a week</p>
            </div>
            <div className="flex flex-col text-center">
              <Image src="/email.png" alt="Email" width={64} height={64} className="mb-8 ml-3" />
              <p className="text-gray-700">we&apos;ll reply within<br /> five business days</p>
            </div>
          </div>

          <h2 className="flex flex-col text-xl font-semibold items-center mb-6">STORE LOCATOR</h2>

          <div className="flex flex-col items-center mb-12">
            <Image
              src="/nikelocation.png"
              alt="Store Locator"
              width={64}
              height={64}
              className="mb-10"
            />
            <p className="text-gray-700">Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



