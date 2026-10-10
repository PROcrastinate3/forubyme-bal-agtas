import React from "react";

function Home() {
  return (
    <div className="max-w-5xl flex justify-center mx-auto">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <img src="/pic1.png" alt="" />
        </div>
        <div className="flex justify-center mt-3">
          <h1 className="text-4xl font-calistoga">John Mark Balagtas</h1>
        </div>
        <div className="flex justify-center">
          <h3 className="text-lg ">A Designer</h3>
        </div>
        <div className="flex justify-center px-8">
          <p className="text-sm text-center">
            I’m a graphic designer and a front-end developer from San Rafael,
            Bulacan. I like creating projects that leavepeople captivated. I do
            social media designs, brand identity, and digital art. I’m currently
            pursuing Bachelor of Science in Information and Technology Major in
            Web and Mobile Application Development at Bulacan State University -
            Bustos Campus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
