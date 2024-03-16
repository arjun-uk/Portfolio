import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Firebase } from "../firebase/config";
import spinner from "../assets/loading.gif";

export const Profile = () => {
  const [Desc, setDesc] = useState("");
  const [Title, setTitle] = useState("");
  const [ProfileImage, setProfileImage] = useState("");

  useEffect(() => {
    Firebase.firestore()
      .collection("Portfolio")
      .doc("ProfileData")
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data().Description);
          setDesc(doc.data().Description);
          setTitle(doc.data().Title);
          setProfileImage(doc.data().ProfileImage);
        } else {
          console.log("No such document!");
        }
      });
  }, []);

  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row md:items-stretch">
          <div className="flex flex-col justify-center md:w-1/2 md:pr-8 mt-14">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              {Title}
            </h2>
            <p className="text-gray-500 py-4 max-w-md">{Desc}</p>

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

          <div className="md:w-1/2 mt-20">
            <img
              src={ProfileImage}
              alt="my profile"
              className="md:mt-0 mx-auto w-2/3 md:w-full rounded-2xl mt-20"
            />
          </div>
        </div>
     
    </div>
  );
};
