import { newBaseUrl, newBaseImageUrl } from "../components/api";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { stringSlicer } from "../functions/stringSlicer";
import Wrapper from "../components/layout/Wrapper";
import Footer from "../components/Footer";
import convertImageUrl from "../functions/convertImageUrl";
import SeriesContainer from "../components/SeriesContainer";

function Serier() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    async function fetchShows() {
      try {
        setIsLoading(true);
        const query = `?query=*[_type == "shows"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        setShows(data.result);
      } catch (error) {
        setError("An error occured, try reloading the page.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchShows();
  }, []);
  if (shows.length === 0) {
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
    return <Wrapper>{error}</Wrapper>;
  }
  return (
    <>
      <Helmet>
        <title>Loff | Serier</title>
        <meta
          name="description"
          content="Se alle Loffs serier og sjekk ut Loffs sin podcast, grov underholdning for mennesker i alle aldrer."
        />
      </Helmet>
      <h1>Serier</h1>
      <p className="subheading">
        Her kan du se hvordan vi jobber med merkevarer
      </p>
      <Wrapper>
        {shows.map((show: any, index: number) => (
          <SeriesContainer
            title={show.name}
            image={newBaseImageUrl + convertImageUrl(show.image.asset._ref)}
            text={stringSlicer(show.excerpt, 200)}
            link={show._id}
            youtube={show.youtube_url}
            key={index}
          />
        ))}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Serier;
