import React from 'react';
import { Button } from './ui/button';
import { MailIcon } from 'lucide-react';
const NewsLetter = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-6 bg-blue-900 rounded-2xl flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left mb-4 sm:mb-0">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="flex flex-col gap-4 sm:gap-6 items-center sm:items-start">
        <div className="flex items-center gap-3 w-full sm:w-[350px] h-12 rounded-full px-4 py-2 bg-white">
          {/* Email Icon */}
          <MailIcon className="h-5 w-5 text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-full border-none outline-none text-sm p-2"
          />
        </div>

        <Button className="w-full sm:w-[350px] h-12 rounded-full bg-white text-black font-medium flex items-center justify-center">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
