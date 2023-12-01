import PropTypes from "prop-types";
import { PencilFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function Profile({ username, description }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5 w-100 bg-secondary-subtle">
      <div className="position-relative d-inline-block">
        <img
          src={encodeURI(
            "https://ui-avatars.com/api/?background=random&&name=" +
              username.split(/(?=[A-Z])/).join("+")
          )}
          className="rounded-4 border border-2 border-dark"
          style={{ width: "100px", height: "100px" }}
          alt={username + "'s avatar"}
        />
        <Link
          to="/edit-profile"
          className="btn btn-dark rounded-3 text-white btn-lg position-absolute"
          style={{ bottom: "-5px", right: "-5px" }}
        >
          <PencilFill className="d-inline-block align-middle"></PencilFill>
        </Link>
      </div>
      <h4 className="fs-1 mt-3 mb-4">{username}</h4>
      <div
        className="d-flex flex-column justify-content-center align-items-center p-4 text-center"
        style={{ width: "33%" }}
      >
        <p className="fs-4">{description}</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Profile;
