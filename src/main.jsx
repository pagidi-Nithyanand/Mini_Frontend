import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Player } from "./pages/Player";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import Auth from "./pages/Auth.jsx";
import ErrorPage from "./pages/Error.jsx";
import VideoContainer from "./components/Video.jsx";
import Comments from "./components/Comments.jsx";
import Frame from "./components/Frame.jsx";
import { VideoDeck } from "./components/VideoDeck.jsx";
import Upload from "./pages/Upload.jsx"; // Add this line
import History from "./pages/History";
import WatchLater from "./pages/WatchLater";
TimeAgo.addDefaultLocale(en);

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  // Check if there's a token in localStorage
  const storedToken = localStorage.getItem("token");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/upload",
      element: <Upload />,
    },
    {
      path: "/history",
      element: <History />,
    },
    {
      path: "/watchlater",
      element: <WatchLater />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/v/:videoId",
      element: <Player />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "frame",
      element: (
        <div>
          <Frame />
          <VideoDeck />
        </div>
      ),
    },
    {
      path: "Video",
      element: (
        <div>
          <VideoContainer />
          <Comments />
        </div>
      ),
    },
    {
      path: "Comments",
      element: <Comments />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <store.Provider value={[token, setToken]}>
        <RouterProvider router={router} />
      </store.Provider>
    </React.StrictMode>
  );
};

import "./main.css";

// Theme switcher logic
if (
  window?.matchMedia &&
  window?.matchMedia("(prefers-color-scheme: dark)").matches
)
  import("./dark.scss");
else import("./light.scss");

ReactDOM.render(<App />, document.getElementById("root"));
