import React from "react";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-5xl flex justify-center mx-auto m-10">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <div className=" border-2 px-15 rounded-tl-3xl rounded-br-3xl py-1 bg-[#D9D9D9]">
            <h2 className="text-2xl font-calistoga ">Skills/Services</h2>
          </div>
        </div>

        <div className="w-full flex justify-center mt-5 gap-2">
          <div className="max-w-60.25 w-50 flex flex-col border py-2 rounded-3xl border-[#D8D8D8] bg-[#D9D9D9]/50">
            <div className="flex justify-center">
              <Mail className="w-16 h-16" />
            </div>
            <div className="flex justify-center text-xs">
              <h3>Email Address</h3>
            </div>
            <div className="text-center flex flex-col font-semibold text-lg">
              <h2 className="">mjmassalangg24</h2>
              <h2>@gmail.com</h2>
            </div>
          </div>
          <div className="max-w-60.25 w-50 flex flex-col border py-2 rounded-3xl border-[#D8D8D8] bg-[#D9D9D9]/50">
            <div className="flex justify-center">
              <Phone className="w-16 h-16" />
            </div>
            <div className="flex justify-center text-xs">
              <h3>Email Address</h3>
            </div>
            <div className="text-center flex flex-col font-semibold text-lg">
              <h2 className="">mjmassalangg24</h2>
              <h2>@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
