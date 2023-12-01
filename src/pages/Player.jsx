import Frame from "../components/Frame";
import { VideoPlayer, Description } from "../components/VideoPlayer";
import Comments from "../components/Comments";
import { VideoDeck } from "../components/VideoDeck";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Page({ description }) {
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
  }, []);

  return (
    <>
      <div className="d-flex p-4">
        <div
          style={{
            width: "80%",
          }}
        >
          <VideoPlayer />
          <Description description={description} />
          <Comments />
        </div>
        <>{data !== null && <VideoDeck title="Suggested" videos={data} />}</>
      </div>
    </>
  );
}
export function Player(description) {
  return (
    <Frame>
      <Page description={description} />
    </Frame>
  );
}
