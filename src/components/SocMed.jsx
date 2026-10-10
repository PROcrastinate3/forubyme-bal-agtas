import { FaFacebookF, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import LinkButton from "./LinkButton";
import { socials } from "../data/siteConfig";
import {
  facebookLink,
  instagramLink,
  discordLink,
  githubLink,
} from "../utils/links";

function SocMed() {
  // Only accounts the owner filled in are shown.
  const accounts = [
    {
      label: "Facebook",
      icon: <FaFacebookF className="text-white w-5 h-5" />,
      value: socials.facebook,
      build: facebookLink,
    },
    {
      label: "Instagram",
      icon: <FaInstagram className="text-white w-5 h-5" />,
      value: socials.instagram,
      build: instagramLink,
    },
    {
      label: "Discord",
      icon: <FaDiscord className="text-white w-5 h-5" />,
      value: socials.discord,
      build: discordLink,
    },
    {
      label: "Github",
      icon: <FaGithub className="text-white w-5 h-5" />,
      value: socials.github,
      build: githubLink,
    },
  ].filter((a) => a.value);

  return (
    <div className="max-w-5xl flex justify-center mx-auto m-10">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <div className=" border-2 px-15 rounded-tl-3xl rounded-br-3xl py-1 bg-[#D9D9D9]">
            <h2 className="text-2xl font-calistoga ">Social Media Links</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5 px-5">
          {accounts.map(({ label, icon, value, build }) => (
            <LinkButton
              key={label}
              label={label}
              icon={icon}
              href={build(value)}
              external
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocMed;
