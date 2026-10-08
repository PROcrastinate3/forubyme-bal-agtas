import React from "react";
import { ArrowRight } from "lucide-react";

function Skills() {
  return (
    <div className="max-w-5xl flex justify-center mx-auto mt-10">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <div className=" border-2 px-15 rounded-tl-3xl rounded-br-3xl py-1 bg-[#D9D9D9]">
            <h2 className="text-2xl font-calistoga ">Skills/Services</h2>
          </div>
        </div>
        <div className="flex justify-center mt-6 mx-5 p-2 border border-[#D8D8D8] rounded-2xl bg-[#D9D9D9]/50">
          <div className="flex flex-1 justify-center">
            <ul className=" text-sm">
              <li>-Social Media Publications</li>
              <li>-Graphic Designs</li>
              <li>-Merchandise Designs</li>
              <li>-Color Theory & Typography</li>
              <li>-Logo Design</li>
            </ul>
          </div>
          <div className="flex flex-1 justify-center">
            <ul className=" text-sm">
              <li>-Branding & Visual Identity Design</li>
              <li>-Website Front-End Design</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center mt-5 px-5">
          <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
            <h1
              className="text-white font-calistoga
              "
            >
              View Projects
            </h1>{" "}
            <ArrowRight className="text-white w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
