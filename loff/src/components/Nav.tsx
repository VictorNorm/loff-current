import { randomNumber } from "../functions/randomNumber";
import { Link } from "react-router-dom";
import Wrapper from "./layout/Wrapper";
import logo1 from "../logo-svg/logo-1.svg";
import logo2 from "../logo-svg/logo-2.svg";
import logo3 from "../logo-svg/logo-3.svg";
import logo4 from "../logo-svg/logo-4.svg";
import logo5 from "../logo-svg/logo-5.svg";
import logo6 from "../logo-svg/logo-6.svg";
import logo7 from "../logo-svg/logo-7.svg";
import logo8 from "../logo-svg/logo-8.svg";
import ytIcon from "../logo-some/Youtube-ikon.svg";
import instaIcon from "../logo-some/Instagram-ikon.svg";
import tiktokIcon from "../logo-some/Tiktok-ikon.svg";
import fbookIcon from "../logo-some/Facebook-ikon.svg";
import podIcon from "../logo-some/Podcast-ikon.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function Nav() {
  const logoIndex = randomNumber(0, 7);
  return (
    <nav>
      <Wrapper layout="wrapper--flex-row">
        <ul className="nav__link-container">
          <Link to="/serier">serier</Link>
          <Link to="/bassene">folka</Link>
          <Link to="/omloff">om loff</Link>
          <a href="https://loff.shop/">shop</a>
        </ul>
        <Link to="/" className="logoContainer">
          <img src={logos[logoIndex]} alt="Logo" />
        </Link>
        <ul className="nav__icon-container">
          <li>
            <a href="https://www.youtube.com/c/Loffno" id="youtube">
              <img src={ytIcon} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/loff.no" id="facebook">
              <img src={fbookIcon} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/loff.no/" id="instagram">
              <img src={instaIcon} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@loff.no" id="tiktok">
              <img src={tiktokIcon} alt="tiktok" />
            </a>
          </li>
          <li>
            <a href="https://podcasts.apple.com/no/podcast/bassene/id1542211872">
              <img src={podIcon} alt="podcast" />
            </a>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
}

export default Nav;
