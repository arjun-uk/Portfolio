import React, { useState, useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Firebase } from "../firebase/config";




const NavBar = () => {
    
    
  const [nav, setNav] = useState(false);
  const [Name, setName] = useState("");
  
 

  useEffect(() => {
    
    Firebase.firestore()
      .collection("Portfolio")
      .doc("ProfileData")
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data().name);
          setName(doc.data().name);
          
        } else {
          console.log("No such document!");
        }
      });
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  

  return (
    
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed ">
     
      <div>
        <h1 className="text-5xl font-logo ml-2">{Name}</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <ul className="flex flex-col justify-center items-center">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
