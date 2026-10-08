import React from "react";

import { FaFacebookF, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";

function SocMed() {
  return (
    <div className="max-w-5xl flex justify-center mx-auto m-10">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <div className=" border-2 px-15 rounded-tl-3xl rounded-br-3xl py-1 bg-[#D9D9D9]">
            <h2 className="text-2xl font-calistoga ">Social Media Links</h2>
          </div>
        </div>
        <div>
          {/*  */}
          <div className="w-full flex justify-center items-center mt-5 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <FaFacebookF className="text-white w-5 h-5" />
              <h1
                className="text-white font-calistoga
              "
              >
                Facebook
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center items-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <FaInstagram className="text-white w-5 h-5" />
              <h1
                className="text-white font-calistoga
              "
              >
                Instagram
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center items-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <FaDiscord className="text-white w-5 h-5" />
              <h1
                className="text-white font-calistoga
              "
              >
                Discord
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center items-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <FaGithub className="text-white w-5 h-5" />
              <h1
                className="text-white font-calistoga
              "
              >
                Github
              </h1>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocMed;
