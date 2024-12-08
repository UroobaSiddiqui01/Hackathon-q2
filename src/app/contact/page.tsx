import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">GET HELP</h1>
        <p className="mb-6">What can we help you with?</p>

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
        <p className="mb-6">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>

        <div className="flex justify-between items-center mb-8">
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">JOIN US</button>
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">SHOP NIKE</button>
        </div>

        <h2 className="text-xl font-semibold mb-2">FAQs</h2>
        <p className="mb-2">Does my card need international purchases enabled?</p>
        <p className="mb-4">
          Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. Please note, some banks may charge a small transaction fee for international orders.
        </p>

        <p className="mb-2">Can I pay for my order with multiple methods?</p>
        <p className="mb-4">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>

        <p className="mb-2">What payment method is accepted for SNKRS orders?</p>
        <p className="mb-4">You can use any accepted credit card to pay for your SNKRS order.</p>

        <p className="mb-2">Why don&apos;t I see Apple Pay as an option?</p>
        <p className="mb-4">
          To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
        </p>

        <h2 className="text-xl font-semibold mb-2">CONTACT US</h2>
        <p className="mb-2">000 800 919 0566</p>
        <p className="mb-4">
          Products & Orders: 24 hours a day, 7 days a week<br />
          Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
        </p>

        <h2 className="text-xl font-semibold mb-2">STORE LOCATOR</h2>
        <p className="mb-4">Find Nike retail stores near you</p>

        <h2 className="text-xl font-semibold mb-2">RELATED</h2>
        <ul className="list-disc list-inside mb-4">
          <li>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
          <li>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Feedback</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">👍</button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">👎</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
