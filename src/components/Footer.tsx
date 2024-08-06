import InstaIcons from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black pt-8 text-white/60 border-t border-white/20 py-5">
      <div className="container">
        <div className=" flex flex-col sm:flex-row items-center sm:justify-between">
          <div className="flex-1 text-center sm:text-start">© 2024 my company, Inc. All rights reserved</div>
          <ul className="flex justify-center items-center gap-2.5">
            <li>
              {" "}
              <XSocial />{" "}
            </li>
            <li>
              {" "}
              <InstaIcons />{" "}
            </li>
            <li>
              {" "}
              <YoutubeIcon />{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
