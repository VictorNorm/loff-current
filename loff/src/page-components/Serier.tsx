import Wrapper from "../components/layout/Wrapper";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  baseImageUrl,
  baseUrl,
  newBaseUrl,
  newBaseImageUrl,
} from "../components/api";
import { useState, useEffect } from "react";
import convertImageUrl from "../functions/convertImageUrl";
import Show from "../components/Show";
import SeriesContainer from "../components/SeriesContainer";

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
  return (
    <>
      <h1>Serier</h1>
      <Wrapper>
        {shows.map((show: any, index: number) => (
          <SeriesContainer
            title={show.name}
            image={newBaseImageUrl + convertImageUrl(show.image.asset._ref)}
            text={show.excerpt}
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
