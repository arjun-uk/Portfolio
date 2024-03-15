import React , {useState} from "react"
import { Firebase } from "../firebase/config"


function LoginAdmin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  



  const handleLogin = () => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      const user =userCredential.user;
      console.log(user);
      window.location.href = '/dashboard';
    
    })
    .catch((error) => {
      console.log(error);
      alert(`Login failed${error.message}`);
    });

      
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold justify-center text-center">
            Admin Login
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <div className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <button
              onClick={handleLogin}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-10 mx-auto flex items-center rounded-md hover:scale-110 duration-300 w-60 text-center justify-center"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
