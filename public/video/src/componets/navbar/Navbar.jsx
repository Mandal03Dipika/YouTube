import React, { useEffect, useState } from "react";
import "./navbar.css";
import Searchbar from "../searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api";
import Authentication from "../../pages/auth/Authentication";
import { jwtDecode } from "jwt-decode";

function Navbar({ toggleDrawer, setEditCreate }) {
  const current_user = useSelector((state) => state.users[0]);
  const [AuthBtn, setAuthBtn] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState(current_user);
  useEffect(() => {
    if (current_user) {
      setUser(current_user);
    }
  }, [current_user]);
  return (
    <>
      <div className="container_navbar">
        <div className="burger_logo_navbar">
          <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/"} className="logo_navbar">
            <img src="public/images/logo.jpg" alt="" />
            <p className="logo_title">YouTube</p>
          </Link>
        </div>
        <Searchbar />
        <RiVideoAddLine size={22} className={"vid_bell_navbar"} />
        <div className="apps_box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className={"vid_bell_navbar"} />
        <div className="auth_cont_navbar">
          <div className="chanel_logo_app" onClick={() => setAuthBtn(true)}>
            {user && localStorage.getItem("accessToken") ? (
              <p className="fstChar_logo_app">
                {user.data.result.email.charAt(0).toUpperCase()}
              </p>
            ) : (
              <>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    try {
                      if (credentialResponse.credential != null) {
                        const userCredential = jwtDecode(
                          credentialResponse.credential
                        );
                        const email = userCredential.email;
                        const payLoad = { email: email };
                        dispatch(userLogin(payLoad));
                      }
                    } catch (error) {
                      console.log(error.message);
                    }
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  render={(renderProps) => (
                    <p onClick={renderProps.onClick} className="auth_btn">
                      <BiUserCircle size={22} />
                      <b>Sign In</b>
                    </p>
                  )}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {AuthBtn && (
        <Authentication
          setUser={setUser}
          setEditCreate={setEditCreate}
          setAuthBtn={setAuthBtn}
          user={current_user}
        />
      )}
    </>
  );
}

export default Navbar;
