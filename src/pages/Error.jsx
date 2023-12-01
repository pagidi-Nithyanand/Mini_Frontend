import ErrorPageBg from "../assets/ErrorPageBg.svg";
export default function ErrorPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={ErrorPageBg}
        alt="404"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <div
        className="px-5 text-center fs-1"
        style={{
          color: "white",
          opacity: "0.8",
          position: "absolute",
          bottom: "5%",
          maxWidth: "650px",
        }}
      >
        <h1 className="py-3">404 - You have lost your way</h1>
        <p className="fs-2 fw-bold">
          In the limitless realm of space, the quest for exploration can
          sometimes veer into perilous territory, where the stars alone
          illuminate the path through the cosmic night.
        </p>
      </div>
    </div>
  );
}
