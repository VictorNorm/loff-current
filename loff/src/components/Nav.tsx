import React from "react";
import Wrapper from "./layout/Wrapper";
import logo1 from "../logo-svg/logo-1.svg";
import logo2 from "../logo-svg/logo-2.svg";
import logo3 from "../logo-svg/logo-3.svg";
import logo4 from "../logo-svg/logo-4.svg";
import logo5 from "../logo-svg/logo-5.svg";
import logo6 from "../logo-svg/logo-6.svg";
import logo7 from "../logo-svg/logo-7.svg";
import logo8 from "../logo-svg/logo-8.svg";
import { randomNumber } from "../utils/common";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function Nav() {
  const logoIndex = randomNumber(0, 7);
  return (
    <nav>
      <Wrapper layout="wrapper--flex-row">
        <ul className="nav__link-container">
          <Link to="/serier">Serier</Link>
          <Link to="/bassene">Bassene</Link>
          <Link to="/omloff">Om Loff</Link>
          <a href="https://loff.shop/">Shop</a>
        </ul>
        <Link to="/" className="logoContainer">
          <img src={logos[logoIndex]} alt="Logo" />
        </Link>
        <ul className="nav__icon-container">
          <li>
            <a href="https://www.youtube.com/c/Loffno" id="youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/loff.no" id="facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/loff.no/" id="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@loff.no" id="tiktok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a href="https://podcasts.apple.com/no/podcast/bassene/id1542211872">
              <FontAwesomeIcon icon={faPodcast} />
            </a>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
}

export default Nav;
