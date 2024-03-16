import React, { useState, useEffect } from "react";
import { Firebase } from "../firebase/config";

const Experience = () => {
  const [expertise, setExpertise] = useState([]);
  useEffect(() => {
    Firebase.firestore()
      .collection("PortfolioExpertise")
      .get()
      .then((querySnapshot) => {
        const expertiseArray = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            expertiseArray.push({ id: doc.id, ...doc.data() });
          } else {
            console.log("No such document:", doc.id);
          }
        });
        setExpertise(expertiseArray);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, []);

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Expertise
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center py-8 px-4 lg:px-10">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center items-center h-40 overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt=""
                  className="max-h-42 w-full object-cover object-center p-4 rounded-3xl"
                />
              </div>
              <p className="text-center text-black text-lg font-semibold py-4">
                {item.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
