import { UserPlus, Phone, MessageSquareText, Mail } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import LinkButton from "./LinkButton";
import { profile, socials } from "../data/siteConfig";
import { telLink, smsLink, mailLink, messengerLink } from "../utils/links";
import { downloadVCard } from "../utils/vcard";

function QuickLinks() {
  // Each entry is only shown if the owner filled in the matching detail.
  const links = [
    {
      label: "Save Contact",
      icon: <UserPlus className="text-white" />,
      onClick: () => downloadVCard(profile),
      show: true,
    },
    {
      label: "Call",
      icon: <Phone className="text-white" />,
      href: profile.phone && telLink(profile.phone),
      show: !!profile.phone,
    },
    {
      label: "Text / SMS",
      icon: <MessageSquareText className="text-white" />,
      href: profile.phone && smsLink(profile.phone),
      show: !!profile.phone,
    },
    {
      label: "Send Email",
      icon: <Mail className="text-white" />,
      href: profile.email && mailLink(profile.email),
      show: !!profile.email,
    },
    {
      label: "Messenger",
      icon: <FaFacebookMessenger className="text-white w-5 h-5" />,
      href: socials.messenger && messengerLink(socials.messenger),
      external: true,
      show: !!socials.messenger,
    },
  ].filter((l) => l.show);

  return (
    <div className="max-w-5xl flex justify-center mx-auto m-10">
      <div className="flex-col justify-center items-center w-full max-w-110">
        <div className="flex justify-center">
          <div className=" border-2 px-15 rounded-tl-3xl rounded-br-3xl py-1 bg-[#D9D9D9]">
            <h2 className="text-2xl font-calistoga ">Quick Links</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5 px-5">
          {links.map(({ label, icon, href, onClick, external }) => (
            <LinkButton
              key={label}
              label={label}
              icon={icon}
              href={href}
              onClick={onClick}
              external={external}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
