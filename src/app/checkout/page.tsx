'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleCompletePurchase = () => {
    if (!name || !email || !address || !cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all the fields.');
      return;
    }

    setTimeout(() => {
      alert('Purchase complete!');
      router.push('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-teal-100 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Complete Your Purchase
        </h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="123 Main St"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleCompletePurchase}
            className="w-full py-4 bg-teal-500 text-white rounded-lg font-semibold text-lg hover:bg-teal-600 transition-all shadow-md hover:shadow-lg"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
