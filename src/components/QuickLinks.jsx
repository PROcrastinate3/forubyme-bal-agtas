import React from "react";

import { UserPlus, Phone, MessageSquareText, Mail } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";

function QuickLinks() {
  return (
    <div className="max-w-5xl flex justify-center mx-auto m-10">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <div className=" border-2 px-15 rounded-tl-3xl rounded-br-3xl py-1 bg-[#D9D9D9]">
            <h2 className="text-2xl font-calistoga ">Quick Links</h2>
          </div>
        </div>
        <div>
          {/*  */}
          <div className="w-full flex justify-center mt-5 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <UserPlus className="text-white" />
              <h1
                className="text-white font-calistoga
              "
              >
                Save Contact
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <Phone className="text-white" />
              <h1
                className="text-white font-calistoga
              "
              >
                Call
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <MessageSquareText className="text-white" />
              <h1
                className="text-white font-calistoga
              "
              >
                Text / SMS
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center border rounded-full py-2 gap-2">
              <Mail className="text-white" />
              <h1
                className="text-white font-calistoga
              "
              >
                Send Email
              </h1>{" "}
            </button>
          </div>
          {/*  */}
          <div className="w-full flex justify-center mt-2 px-5">
            <button className="flex w-full bg-[#090042] justify-center items-center border rounded-full py-2 gap-2">
              <FaFacebookMessenger className="text-white w-5 h-5" />
              <h1
                className="text-white font-calistoga
              "
              >
                Messenger
              </h1>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
