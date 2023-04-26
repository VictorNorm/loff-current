import Wrapper from "./layout/Wrapper";
import ytIcon from "../logo-some/Youtube-ikon.svg";
import fbookIcon from "../logo-some/Facebook-ikon.svg";
import instaIcon from "../logo-some/Instagram-ikon.svg";
import tiktokIcon from "../logo-some/Tiktok-ikon.svg";
import podIcon from "../logo-some/Podcast-ikon.svg";

function Footer() {
  return (
    <footer>
      <Wrapper>
        <ul className="footer__icon-container">
          <li>
            <a
              href="https://www.youtube.com/c/Loffno"
              id="youtube"
              className="some-link"
            >
              <img src={ytIcon} alt="youtube" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/loff.no"
              id="facebook"
              className="some-link"
            >
              <img src={fbookIcon} alt="facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/loff.no/"
              id="instagram"
              className="some-link"
            >
              <img src={instaIcon} alt="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@loff.no"
              id="tiktok"
              className="some-link"
            >
              <img src={tiktokIcon} alt="tiktok" />
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com/no/podcast/bassene/id1542211872"
              className="some-link"
            >
              <img src={podIcon} alt="podcast" />
            </a>
          </li>
        </ul>
      </Wrapper>
    </footer>
  );
}

export default Footer;
