import { newBaseUrl, newBaseImageUrl } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import numberFormatter from "../functions/numberFormatter";
import Wrapper from "../components/layout/Wrapper";
import convertImageUrl from "../functions/convertImageUrl";
import youtubeLogo from "../logo-svg/YouTube_Logo_2017.svg.png";
import instagramLogo from "../logo-svg/instagram-ar21.svg";
import tiktokLogo from "../logo-svg/TikTok_logo.svg";
import Footer from "../components/Footer";
import Graph from "../components/Graph";

function Details() {
  const [show, setShow] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchShows() {
      try {
        setIsLoading(true);
        const query = `?query=*[_type == "shows"][_id == "${id}"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.result);
        setShow(data.result);
      } catch (error) {
        setError("An error occured, try reloading the page.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchShows();
  }, []);
  const currentShow = show[0];
  if (show.length === 0) {
    return null;
  }
  if (isLoading) {
    return (
      <Wrapper>
        <div className="loader"></div>
      </Wrapper>
    );
  }
  if (error) {
    <Wrapper>{error}</Wrapper>;
  }
  return (
    <>
      <Helmet>
        <title>Loff | Serie</title>
        <meta
          name="description"
          content="Les om detaljer, demografi og seertall av alle Loffs serier og podcast, du kan også se serien på youtube."
        />
      </Helmet>
      <Wrapper>
        <div className="show-container">
          <h1>{currentShow.name}</h1>
          <div className="show-container__image-container">
            <a
              href={`${currentShow.youtube_url}`}
              className="show-container__image-container__link"
            >
              <FontAwesomeIcon icon={faYoutube} className="youtube" />
            </a>
            <img
              src={
                newBaseImageUrl + convertImageUrl(currentShow.image.asset._ref)
              }
              alt="Show"
            />
          </div>
          <section className="show-container__text-container">
            <p>{currentShow.excerpt}</p>
            {currentShow.tiktok_views && (
              <p className="show-container__text-container--some">
                " Over {numberFormatter(currentShow.tiktok_views)} visninger på
                TikTok <FontAwesomeIcon icon={faTiktok} className="tiktok" />
              </p>
            )}
            <p>{currentShow.long_description}</p>
            {currentShow.instagram_views && (
              <p className="show-container__text-container--some">
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
                Over {numberFormatter(currentShow.instagram_views)} visninger på
                Instagram "
              </p>
            )}
          </section>
          <h2 id="demography">Demografi</h2>
          <Graph
            age1={currentShow.age_1317}
            age2={currentShow.age_1824}
            age3={currentShow.age_2534}
            age4={currentShow.age_3544}
            age5={currentShow.age_4554}
            age6={currentShow.age_55}
          />
          <section className="show-container__demography-container">
            <section className="demography-container__youtube-container">
              <img src={youtubeLogo} />
              <p>
                <strong>Episoder:</strong> {currentShow.youtube_episodes}
              </p>
              <p>
                <strong> Episodevarighet:</strong>{" "}
                {currentShow.youtube_episode_duration} minutter
              </p>
              <p>
                <strong>Views:</strong> {currentShow.youtube_views}
              </p>
            </section>
          </section>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Details;

{
  /* <section className="demography-container__instagram-container">
  <img src={instagramLogo} />
  <p>Followers: {currentShow.instagram_followers}</p>
  <p>Posts: {currentShow.instagram_posts}</p>
</section> */
}
{
  /* <section className="demography-container__tiktok-container">
  <img src={tiktokLogo} />
  <p>Followers: {currentShow.tiktok_followers}</p>
  <p>Likes: {currentShow.tiktok_likes}m</p>
</section> */
}
