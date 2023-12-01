import { ChevronDoubleRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          'url("https://r4.wallpaperflare.com/wallpaper/460/990/412/electric-power-map-lights-night-wallpaper-69d0385d916a8d4bb68778efe031d67d.jpg")',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="text-center text-white"
        style={{
          fonsSize: "50px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <h1
          className="fw-bold"
          style={{
            fontSize: "10vw",
          }}
        >
          SilentVox
        </h1>
        <h2>Where Ideas Anonymously Unite: Your Hub for Diverse Journals</h2>
        <br style={{ margin: "25px" }} />
        <Link to="/auth?page=signup">
          <ChevronDoubleRight
            className="border border-white p-2 rounded-circle text-white"
            size={50}
          />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
