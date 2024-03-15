import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://play-lh.googleusercontent.com/gk4OF5Rv4xFjZ0qmpw9RyZWjZz9B_JefKwxab_nZvhSz3Ch_oFvc6rgU7mIggdhGOdEG=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.ott.rhyfill&pcampaignid=web_share",
      title: "VDOJAR",
    },
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 ">
          {portfolios.map(({ id, src, link, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-3xl  bg-slate-900"
            >
              <img
                src={src}
                alt=""
                className="rounded-3xl p-2 duration-200 mx-auto"
              />
              <h4 className="text-2xl pl-4 mb-2 mt-2 font-bold">{title}</h4>
              <div className="flex items-center justify-center">
                <div className="mb-5 hover:scale-105">
                  <a
                    href={link}
                    className="group text-white w-fit px-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-500 cursor-pointer"
                  >
                    Play Store
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* {posts.map((obj)=>{
            return(
              <div key={obj.id} className="shadow-md shadow-gray-600 rounded-3xl  bg-slate-900">
              <img
                src="{src}"
                alt=""
                className="rounded-3xl p-2 duration-200"
              />
              <h4 className="text-2xl pl-4 mb-2 mt-2 font-bold">{obj.title}</h4>
              <div className="flex items-center justify-center">
                <div className="mb-5 hover:scale-105">
                  <a href="{link}" className="group text-white w-fit px-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-500 cursor-pointer">
                    Play Store
                  </a>
                </div>
              </div>
            </div>

            ); 
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
