import React from 'react';
import { NAVBAR } from '../utils/Data';

function Dashboard() {
  const { title, bio, image } = NAVBAR;

  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-20 lg:pt-16 lg:pb-14">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-y-4 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            {bio}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4">
          <img
            src={image}
            alt="Dashboard visual"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
