import React, { useState, useEffect } from "react";
import { Firebase } from "../firebase/config";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("");
  const [name, setName] = useState("");
  const [aboutMe, setaboutMe] = useState("");
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [Profileimage, setProfileImage] = useState(null);
  const [ProfileimageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    handleTabChange("introduction");
  }, []);

  const handleProfileImageUpload = (event) => {
    const selectedImage = event.target.files[0];

    console.log(selectedImage);
    setProfileImage(selectedImage);
  };
  const handleProfileSubmit = () => {
    const profileData = {
      name: name,
      ProfileImage: ProfileimageUrl,
      Title: title,
      Description: description,
      aboutMe: aboutMe,
    };

    console.log("profileImage");
    Firebase.firestore()
      .collection("Portfolio")
      .doc("ProfileData")
      .set(profileData)
      .then((response) => {
        console.log(response);
        console.log("sucessfully uploaded");
        alert("uploaded successfully");
        window.location.href = "/";
      });
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };


  const uploadImageToFirebase = () => {
    if (Profileimage) {
      const storageRef = Firebase.storage().ref();
      const imageRef = storageRef.child(`images/${Profileimage.name}`);
      imageRef
        .put(Profileimage)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(
              "Image uploaded successfully. Download URL:",
              downloadURL
            );
            alert("Image uploaded successfully");
            setProfileImageUrl(downloadURL);
          });
        })
        .catch((error) => {
          console.error("Error uploading image: ", error);
        });
    }
  };

  return (
    <div className=" bg-gradient-to-b from-black to-gray-800 p-4 text-black">
      <div className=" mt 10 bg-gradient-to-b from-black to-gray-800 p-4 text-black">
        <div className="mt-10 flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="flex mb-4 mt-2">
            <div
              className={`mr-4 py-2 px-4 cursor-pointer  ${
                activeTab === "introduction"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("introduction")}
            >
              Introduction Data Add
            </div>
            <div
              className={`mr-4 py-2 px-4 cursor-pointer ${
                activeTab === "projects"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("projects")}
            >
              Projects Add
            </div>
            <div
              className={`mr-4 py-2 px-4 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("experience")}
            >
              Experience Add
            </div>
          </div>

          <div className="bg-gradient-to-b to-gray-800 to-gray-500 p-4 text-black mt-10 h-full">
            {activeTab === "introduction" && (
              <div className="text-center">
                <img
                  src={
                    ProfileimageUrl
                      ? ProfileimageUrl
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/1024px-Ic_person_48px.svg.png"
                  }
                  alt="Introduction"
                  className="mx-auto mb-4 w-20 h-20 bg-white rounded-full mt-5 cursor-pointer hover:scale-105"
                  onClick={() => document.getElementById("fileInput").click()}
                />
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleProfileImageUpload} // Call handleImageUpload function when file is selected
                />
                <button
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto mt-10 "
                  onClick={uploadImageToFirebase}
                >
                  pick image and click this button to upload
                </button>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="mt-10 p-2 md:w-full  bg-transparent border-2 rounded-md text-white focus:outline-none"
                />

                <input
                  type="text"
                  value={title}
                  placeholder="Enter Title"
                  onChange={(e) => settitle(e.target.value)}
                  className="mt-10 p-2 md:w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                />

                <textarea
                  value={description}
                  placeholder="Enter Description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-10 p-2 h-28 md:w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                />

                <textarea
                  value={aboutMe}
                  placeholder="Enter About Me"
                  onChange={(e) => setaboutMe(e.target.value)}
                  className=" mt-10 p-2 h-28 md:w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <button
                  onClick={handleProfileSubmit}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto mt-10"
                >
                  Submit
                </button>
              </div>
            )}
            {activeTab === "projects" && (
              <div className="text-center">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/1024px-Ic_person_48px.svg.png"
                  }
                  alt="projects"
                  className="mx-auto mb-4 w-20 h-20 bg-white rounded-full mt-5 cursor-pointer hover:scale-105"
                  onClick={() =>
                    document.getElementById("ExpfileInput").click()
                  }
                />
                <input
                  id="ExpfileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  // Call handleImageUpload function when file is selected
                />
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto mt-10 ">
                  pick image and click this button to upload
                </button>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="mt-10 p-2 md:w-full  bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
              </div>
            )}
            {activeTab === "experience" && (
              <div className="text-center">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/1024px-Ic_person_48px.svg.png"
                  }
                  alt="projects"
                  className="mx-auto mb-4 w-20 h-20 bg-white rounded-full mt-5 cursor-pointer hover:scale-105"
                  onClick={() =>
                    document.getElementById("projectfileInput").click()
                  }
                />
                <input
                  id="projectfileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto mt-10 ">
                  pick image and click this button to upload
                </button>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="mt-10 p-2 md:w-full  bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
