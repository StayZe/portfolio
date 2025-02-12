import { Instagram, Linkedin, Github } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div id="social" className="w-full h-full flex flex-col md:flex-row justify-evenly items-center">
      <Instagram height={75} width={75} className="hover:scale-90 hover:rotate-12 duration-200 transition-all" />
      <Linkedin height={75} width={75} className="hover:scale-90 hover:-rotate-6 duration-200 transition-all" />
      <Github height={75} width={75} className="hover:scale-90 hover:rotate-6 duration-200 transition-all" />
      <FontAwesomeIcon icon={faDiscord} style={{ height: 75, width: 75 }} className="hover:scale-90 hover:-rotate-12 duration-200 transition-all" />
    </div>
  );
}
