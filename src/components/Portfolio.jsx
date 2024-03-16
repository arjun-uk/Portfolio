import React, { useEffect, useState } from "react";
import { Firebase } from "../firebase/config";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Firebase.firestore()
      .collection("PortfolioProjects")
      .get()
      .then((querySnapshot) => {
        const projectsArray = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            projectsArray.push({ id: doc.id, ...doc.data() });
            console.log("Document data:", doc.data());
          } else {
            console.log("No such document:", doc.id);
          }
        });
        setProjects(projectsArray);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, []);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt="Project"
                className="w-full h-60 sm:h-48 object-cover object-center p-4 rounded-3xl"
              />
              <div className="p-4 rounded-sm">
                <h4 className="text-xl font-semibold mb-2">
                  {project.project_name}
                </h4>
                <a
                  href={project.link}
                  className="block w-full py-2 px-4 rounded-md text-center text-white0 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition duration-300"
                >
                  View on Play Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
