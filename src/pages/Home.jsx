import Frame from "../components/Frame";
import { VideoDeck } from "../components/VideoDeck";
import { useState, useEffect } from "react";
import axios from "axios";

function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/video/allmeta");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once on mount
  console.log("Videos Loading");
  console.log(data);

  return (
    <>{data !== null && <VideoDeck title="Recommended" videos={data} />}</>
  );
}

function Home() {
  return (
    <>
      <Frame>
        <Page />
      </Frame>
    </>
  );
}

export default Home;
