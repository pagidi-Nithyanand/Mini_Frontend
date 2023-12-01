import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { NavbarBrand, Nav, NavItem } from "reactstrap";
import { store } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  HourglassSplit,
  CloudArrowUpFill,
  ClockFill,
  HouseFill,
  BellFill,
  GearFill,
  BoxArrowLeft,
} from "react-bootstrap-icons";
import logo from "../assets/logo.jpeg";
import searchContext from "../context/searchContext";
import { VideoList } from "../components/VideoDeck";
function Search() {
  const search = useContext(searchContext);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/search", {
          params: {
            text: search,
          },
        });
        console.log(response);
        setVideo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {video !== null && (
        <>
          <h1 className="text-white text-center fs-2">
            You searched for {search}
          </h1>
          <VideoList videos={video} />
        </>
      )}
    </>
  );
}

function User({ username }) {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  console.log(data);
  if (!token) {
    setToken(localStorage.getItem("token"));
  }
  useEffect(() => {
    if (token && data === null) {
      localStorage.setItem("token", token);
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
  return (
    <div className="d-flex flex-row justify-content-start align-items-center py-1">
      <img
        src={
          data
            ? encodeURI(
                "https://ui-avatars.com/api/?background=random&&name=" +
                  encodeURIComponent(data.username.split(/(?=[A-Z])/).join("+"))
              )
            : "https://ui-avatars.com/api/?background=random&&name=Default"
        }
        className="rounded border border-2 border-dark"
        width="25"
        height="25"
        alt={username + "'s avatar"}
      />
      <h4 className="fs-5 mx-2">{data && data.username}</h4>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
};
User.defaultProps = {
  username: "DarkLordStrategy",
};
function func() {
  localStorage.removeItem("token");
  window.location.href = "/welcome";
}
function Frame({ children }) {
  const [search, setSearch] = useState("");
  const sidebarWidth = "60px";
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: sidebarWidth,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <NavbarBrand href="/welcome">
            <img src={logo} alt="logo" className="p-2 rounded-5 w-100" />
          </NavbarBrand>
          <Nav
            className="fs-1 h-100 d-flex flex-column justify-content-between"
            navbar
          >
            {/* TODO: add the links for navigation */}
            <div>
              <NavItem className="my-2">
                <Link to="/">
                  <HouseFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link to="/upload">
                  <CloudArrowUpFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link to="/watchlater">
                  <HourglassSplit className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link to="/history">
                  <ClockFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link href="/">
                  <BellFill className="w-100" />
                </Link>
              </NavItem>
            </div>
            <div>
              <NavItem className="my-2">
                <Link href="/">
                  <GearFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link onClick={func}>
                  <BoxArrowLeft className="w-100" />
                </Link>
              </NavItem>
            </div>
          </Nav>
        </div>
        <div
          className="bg-primary"
          style={{
            height: "100vh",
            width: "calc(100vw - " + sidebarWidth + ")",
            overflowY: "scroll",
          }}
        >
          <div
            className="d-flex flex-row w-100 bg-transparent px-4 justify-content-between align-items-center"
            style={{
              height: "10vh",
            }}
          >
            <input
              type="text"
              className="form-control p-3 rounded-2"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              style={{
                width: "30em",
              }}
            />
            <div className="bg-white p-3 rounded-4">
              <Link to="/" className="text-decoration-none text-black">
                <User />
              </Link>
            </div>
          </div>
          <searchContext.Provider value={search}>
            {search ? <Search /> : children}
          </searchContext.Provider>
        </div>
      </div>
    </>
  );
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;
