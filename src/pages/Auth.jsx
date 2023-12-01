import Signup from "../components/Signup";
import Signin from "../components/Signin";
import NavigationBar from "./../components/Navbar";
import { useEffect, useState } from "react";

function Navbutton(props) {
  return (
    <button
      className="btn"
      style={{
        padding: "10px",
        width: "50%",
        fontSize: "20px",
        color: "white",
      }}
      {...props}
    />
  );
}
function Auth() {
  let [page, setPage] = useState("signin");
  useEffect(() => {
    {
      if (new URLSearchParams(window.location.search).get("page") === "signup")
        setPage("signup");
    }
  }, []);

  return (
    <>
      <NavigationBar color="light" light expand="md" />
      <div
      className="row"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: "-1",
          backgroundImage:
            'url("https://r4.wallpaperflare.com/wallpaper/460/990/412/electric-power-map-lights-night-wallpaper-69d0385d916a8d4bb68778efe031d67d.jpg")',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-10 col-md-4 text-white"
          style={{
            padding: "20px",
            borderRadius: "30px",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div>
            <div>
              <Navbutton onClick={() => setPage("signin")}>Sign In</Navbutton>
              <Navbutton onClick={() => setPage("signup")}>Sign Up</Navbutton>
            </div>
            <hr />
            {page === "signup" ? <Signup /> : <Signin />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Auth;
