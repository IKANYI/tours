import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import './Footer.css';
function Footer(){
  return(
  <div className="footer">
    <p>follow us on</p>
    <div className="styles">
    <div className="footer-icons">
      <a href=""><IoLogoTwitter/></a>
    </div>
    <div className="footer-icons">
      <a href=""><div className="footer-icons">
      <a href=""><IoLogoYoutube/></a>
    </div></a>
    </div>
    <div className="footer-icons">
      <a href=""><FaInstagram /></a>
    </div>
    </div>
    <p>all rights reserved</p>
    
  </div>
    
  )
}
export default Footer