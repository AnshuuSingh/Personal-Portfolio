import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center font-sans">

      {/* Hero Section */}
      <section className="flex gap-20 flex-col items-start justify-center w-full max-w-5xl px-24 pt-28 pb-10 lg:flex-row lg:items-center">
        <div className="text-white lg:w-1/2">
          <p className="text-lg text-red-500 font-semibold">HELLO!</p>
          <h1 className="text-5xl font-bold mt-2">
            <div className="name flex">
              <p className="p-2 pl-0">I'm</p>
              <p className="p-2 text-red-500">Anshu</p>
              <p className="p-2">Kumari</p>
            </div>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
          I'm a Computer Science student passionate about technology and problem-solving. I enjoy coding, building software, and exploring new technologies.
          </p>
          <div className="flex mt-6 space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded">
              View Work
            </button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 mb-8 ml-14 mt-10 lg:mb-0 lg:mr-8">
          <div className="absolute inset-0 bg-red-500 rounded-full transform scale-110"></div>
          <img
            src="{`${process.env.PUBLIC_URL}pic1-removebg-preview.jpg`} 
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
