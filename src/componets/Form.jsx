import React from 'react';

const data = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  // ...other countries
];

export default function Form() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="Name"
          placeholder="Enter the name here"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="Email"
          placeholder="Enter the Email here"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="Country" className="block text-gray-700 font-bold mb-2">
          Country
        </label>
        <input
          type="text"
          list="country"
          placeholder="Search country name"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <datalist id="country">
          {data.map((value, index) => (
            <option key={index} value={value.name} />
          ))}
        </datalist>
      </div>
    </div>
  );
}
