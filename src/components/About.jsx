import React,{useState,useEffect} from 'react';
import { Firebase } from "../firebase/config";

const About = () => {
  const [About, setAbout] = useState("");
  useEffect(() => {
    Firebase.firestore()
      .collection("Portfolio")
      .doc("ProfileData")
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data().aboutMe);
          setAbout(doc.data().aboutMe);
          
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

        <p className="text-xl mt-10">{About}</p>
      </div>
    </div>
  );
};

export default About;
