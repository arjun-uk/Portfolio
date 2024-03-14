import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-10">
          As a seasoned Android Developer, I've honed my craft in the dynamic realm of mobile application development and enhancement. With 1.5 years of hands-on experience, I've recently concluded my tenure at Uniflyn Softtech Pvt Ltd in Coimbatore. My journey thus far has instilled in me a deep passion for technological innovation and a relentless pursuit of excellence. Now, I eagerly anticipate the next chapter of my career, where I aspire to channel my expertise into transformative projects that push the boundaries of possibility.
        </p>
      </div>
    </div>
  );
};

export default About;
