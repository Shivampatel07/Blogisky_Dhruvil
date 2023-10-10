import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav1">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="navListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <>
            {user.profilePic ? (
              <>
                <Link to="/settings">
                  <img className="navImg" src={PF + user.profilePic} alt="" />
                </Link>{" "}
              </>
            ) : (
              <>
                <Link to="/settings">
                  <img
                    className="navImg"
                    src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
                    alt=""
                  />
                </Link>{" "}
              </>
            )}
          </>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN/REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Navbar;
