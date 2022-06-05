import Wrapper from "../components/layout/Wrapper";
import Footer from "../components/Footer";
import { newBaseUrl, newBaseImageUrl } from "../components/api";
import { useState, useEffect } from "react";
import convertImageUrl from "../functions/convertImageUrl";
// import Show from "../components/Show";
import SeriesContainer from "../components/SeriesContainer";
import { Helmet } from "react-helmet";
import { stringSlicer } from "../functions/stringSlicer";

function Serier() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchShows() {
      try {
        setIsLoading(true);
        setIsError(false);
        const query = `?query=*[_type == "shows"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.result);
        setShows(data.result);
      } catch (error) {
        setIsError(true);
        if (error) {
          return <div>Error</div>;
        }
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
    return <div className="loader"></div>;
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
