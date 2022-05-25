import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-7 px-2 py-9 md:px-6 ">
      <div className="my-1">
        <h6 className="text-white font-semibold text-lg md:text-xl">SAY HI</h6>
        <a
          href="mailto:victoreleanya89@gmail.com"
          className="text-[#8C948C] mt-2 hover:text-[#19C4D1] transition-all"
        >
          victoreleanya89@gmail.com
        </a>
      </div>
      <div className="flex space-x-2 justify-center md:space-x-4">
        <a
          href="https://www.facebook.com/outtaspace1"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="text-[#8C948C] hoverSocials  cursor-pointer h-6 w-6 md:h-8 md:w-8" />
        </a>
        <a
          href="https://www.instagram.com/mrvic_thor/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare className="text-[#8C948C]  hoverSocials cursor-pointer h-6 w-6 md:h-8 md:w-8" />
        </a>
        <a
          href="https://twitter.com/eva_skillz"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="text-[#8C948C]  hoverSocials cursor-pointer h-6 w-6 md:h-8 md:w-8" />
        </a>
        <a href="https://github.com/mrvicthor" target="_blank" rel="noreferrer">
          <FaTwitterSquare className="text-[#8C948C] hoverSocials  cursor-pointer h-6 w-6 md:h-8 md:w-8" />
        </a>
      </div>
      <div className="text-[#8C948C] text-right">© victor eleanya 2022</div>
    </footer>
  );
};

export default Footer;
