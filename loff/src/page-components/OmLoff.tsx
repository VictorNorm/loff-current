import React from "react";
import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "../components/api";
import convertImageUrl from "../functions/convertImageUrl";
import Wrapper from "../components/layout/Wrapper";

function OmLoff() {
  const [about, setAbout] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchAbout() {
      try {
        const query = `?query=*[_type == "about"]`;
        const url = newBaseUrl + query;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setAbout(data.result);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(about);
      }
    }
    fetchAbout();
  }, []);
  if (about.length === 0) {
    return null;
  }
  // const aboutContent = about[0];
  return (
    <Wrapper>
      <h1>Om Loff</h1>
      <section>
        <p></p>
      </section>
    </Wrapper>
  );
}

export default OmLoff;
