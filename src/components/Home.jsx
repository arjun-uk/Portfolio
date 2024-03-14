import React from 'react'
import HeroImage from "../assets/Hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row md:items-stretch">
        <div className="flex flex-col justify-center md:w-1/2 md:pr-8 mt-14">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an Android Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience in Android Development. Currently, I love to work on mobile applications using technologies like Java, Kotlin, Retrofit, and much more.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 ">
          <img
            src={HeroImage}
            alt="my profile"
            className="mt-10 md:mt-0 mx-auto w-2/3 md:w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};


export default Home
