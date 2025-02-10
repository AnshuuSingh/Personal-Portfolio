import React from "react";

function About() {
  return (
    <section className="bg-gray-900 text-white w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-20 w-full lg:flex-row items-center max-w-6xl">
        {/* Profile Image with red Background */}
        <div className="relative ml-16 h-64 lg:w-80 lg:h-80 flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
          <div className="absolute inset-0 bg-red-500 rounded-full transform scale-110"></div>
          <img
            src="pic2.jpg" // Replace this with your profile image URL
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Text Content */}
        <div className="lg:ml-8 ml-14 text-center lg:text-left ">
          <h2 className="text-4xl font-bold mb-4">
            ABOUT <span className="text-red-500">ME</span>
          </h2>
          <p className="text-gray-400 text-xl mb-6">
          Hi, I am a BTech CSE student at NIT Durgapur. 
          </p>
          <h3 className="text-2xl font-semibold mb-4">A Little About Myself</h3>
          <p className="text-gray-400 mb-4 text-xl">
            I am passionate about
            software development. Fairly proficient in some programming languages C,C++
            and javascript. I am well-versed in web development frameworks like
            HTML/CSS, Bootstrap and ReactJS. Additionally, I have experience
            working with databases like MySQL, MongoDB.
            <br />
            <br />
          </p>
          <a href="/resume.pdf" download="My_Resume.pdf">
            <button className="bg-red-500 hover:bg-gray-700 text-white py-2 px-6 rounded-full font-semibold">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
