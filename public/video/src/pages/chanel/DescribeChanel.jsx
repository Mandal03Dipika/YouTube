import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./DescribeChanel.css";

function DescribeChanel({ cId, setVideoUpload, setEditCreateChanelBtn }) {
  const current_user = useSelector((state) => state.users[0]);
  console.log(current_user);
  const chanel = useSelector((state) => state.users);
  const currentChanel = chanel.filter((c) => c.id === cId)[0];
  return (
    <>
      <div className="container_chanel">
        <div className="chanel_logo_chanel">
          <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
        </div>
        <div className="description_chanel">
          <b>{currentChanel?.name}</b>
          <p>{currentChanel?.desc}</p>
        </div>
        {/* {current_user?.result.id === currentChanel?.id && (
          <> */}
        <p
          className="editBtn_chanel"
          onClick={() => setEditCreateChanelBtn(true)}
        >
          <FaEdit />
          <b>Edit Chanel</b>
        </p>
        <p className="uploadBtn_chanel" onClick={() => setVideoUpload(true)}>
          <FaUpload />
          <b>Upload Video</b>
        </p>
        {/* </>
        )} */}
      </div>
    </>
  );
}

export default DescribeChanel;
