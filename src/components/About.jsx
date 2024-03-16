import React, { useState, useEffect } from "react";
import { Firebase } from "../firebase/config";

const About = () => {
  const [About, setAbout] = useState("");
  const [company, setcompany] = useState("");
  const [designation, setdesignation] = useState("");
  const [joined, setjoined] = useState("");
  const [resigned, setresigned] = useState("");
  useEffect(() => {
    Firebase.firestore()
      .collection("Portfolio")
      .doc("ProfileData")
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data().aboutMe);
          setAbout(doc.data().aboutMe);
          setcompany(doc.data().company);
          setdesignation(doc.data().designation);
          setjoined(doc.data().joined);
          setresigned(doc.data().resigned);
        } else {
          console.log("No such document!");
        }
      });
  }, []);
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-5 pt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-5">{About}</p>

        <p className="text-4xl font-bold inline border-] mt-10">Experience</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <p className="text-sm text-gray-00">{company}</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Designation</h3>
              <p className="text-sm text-gray-400">{designation}</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Dates</h3>
              <p className="text-sm text-gray-400">
                Joined: {joined}
                <br />
                Resigned: {resigned}
              </p>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default About;
