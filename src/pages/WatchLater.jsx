import Frame from "../components/Frame";
import { VideoDeck, VideoList } from "../components/VideoDeck";
import { useState, useEffect } from "react";
import axios from "axios";
function Page() {
  const [history, SetHistory] = useState(null);
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/Profile", {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/watchlater",
          data?._id
        );
        console.log(response);
        SetHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "4em" }}>WatchLater</h1>
      {history !== null && <VideoList title="watchlater" videos={history} />}
    </div>
  );
}

function WatchLater() {
  return (
    <>
      <Frame>
        <Page />
      </Frame>
    </>
  );
}

export default WatchLater;
