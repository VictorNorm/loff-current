import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "./api";
import convertImageUrl from "../functions/convertImageUrl";
import Wrapper from "./layout/Wrapper";

function Merch() {
  const [merch, setMerch] = useState<any>([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMerchData() {
      try {
        const query = `?query=*[_type == "merchdata"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        setMerch(data.result);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError("An error occured, try reloading the page.");
        }
      } finally {
        setIsloading(false);
      }
    }
    fetchMerchData();
    return () => abortController.abort();
  }, []);
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
    <div className="contentBlock-merch-wrapper">
      <Wrapper>
        <div className="contentBlock-merch">
          <div className="contentBlock-merch__text">
            <h2>Merch</h2>
            <p>{merch[0].excerpt}</p>
            <h2>Shopify</h2>
            <p>{merch[0].message}</p>
            <a href={`${merch[0].shoplink}`} className="cta-1">
              Shop
            </a>
          </div>
          <div className="contentBlock-merch__image-container">
            <img
              src={newBaseImageUrl + convertImageUrl(merch[0].image.asset._ref)}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Merch;
