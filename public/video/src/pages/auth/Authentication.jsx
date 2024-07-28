import React from "react";
import "./auth.css";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function Authentication({ user, setAuthBtn, setEditCreate, setUser }) {
  const navigate = useNavigate();
  const onLogOutSuccess = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <div className="auth_container" onClick={() => setAuthBtn(false)}>
        <div className="auth_container2">
          <p className="user_details">
            <div className="chanel_logo_app">
              <p className="fstChar_logo_app">
                {user.data.result.email ? (
                  <>{user.data.result.email.charAt(0).toUpperCase()}</>
                ) : (
                  <>{user.data.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
            <div className="email_auth">{user.data.result.email}</div>
          </p>
          <div className="btns_auth">
            {user.data.result.email ? (
              <>
                <Link
                  to={`/channel/${user.data.result._id}`}
                  className="btn_Auth"
                >
                  Your Channel
                </Link>
              </>
            ) : (
              <>
                <input
                  type="submit"
                  className="btn_auth"
                  value="Create Your Chanel"
                  onClick={() => setEditCreate(true)}
                />
              </>
            )}
            <div>
              <div onClick={() => onLogOutSuccess()} className="btn_auth">
                <BiLogOut /> Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
