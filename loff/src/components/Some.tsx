import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "./api";
import Wrapper from "./layout/Wrapper";
import convertImageUrl from "../functions/convertImageUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Some() {
  const [someImages, setSomeImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchSomeImages() {
      try {
        const query = `?query=*[_type == "someimages"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        const imageData: any = [];
        data.result[0].images.forEach(function (image: any): void {
          if (image.asset._ref) {
            imageData.push({
              src: newBaseImageUrl + convertImageUrl(image.asset._ref),
            });
          }
        });
        setSomeImages(imageData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSomeImages();
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="some-wrapper">
      <div className="some-wrapper_top-container">
        <h2>Sosiale medier</h2>
        <p>
          Du finner oss på Youtube, Facebook, Instagram, TikTok. Du kan også
          følge med på vår egen podcast.
        </p>
        <ul className="some-wrapper__icon-container">
          <li>
            <a
              href="https://www.youtube.com/c/Loffno"
              id="youtube"
              className="some-link"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/loff.no"
              id="facebook"
              className="some-link"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/loff.no/"
              id="instagram"
              className="some-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@loff.no"
              id="tiktok"
              className="some-link"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com/no/podcast/bassene/id1542211872"
              className="some-link"
            >
              <FontAwesomeIcon icon={faPodcast} />
            </a>
          </li>
        </ul>
      </div>
      <Wrapper>
        <div className="some-container">
          {!isLoading
            ? someImages.map((image: any, index: number) => {
                return (
                  <img src={image.src} key={index} className="some-image" />
                );
              })
            : null}
        </div>
      </Wrapper>
    </div>
  );
}

export default Some;
