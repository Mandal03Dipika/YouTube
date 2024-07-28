import React, { useState } from "react";
import "./createEditChanel.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api";

function CreateEditChanel({ setEditCreate }) {
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.users[0]);
  const [name, setName] = useState(current_user?.result.name);
  const [desc, setDesc] = useState(current_user?.result.desc);
  const handleSubmit = () => {
    if (!name) {
      alert("Please Enter Name");
    } else if (!desc) {
      alert("Please Enter Description");
    } else {
      //   dispatch(
      //     updateChanelData(current_user?.result.id, { name: name, desc: desc })
      //   );
      setEditCreate(false);
      setTimeout(() => {
        dispatch(userLogin({ email: current_user.result.email }));
      }, 5000);
    }
  };
  return (
    <>
      <div className="container_create">
        <input
          type="submit"
          name="text"
          value={"X"}
          className="ibtn_x"
          onClick={() => setEditCreate(false)}
        />
        <div className="container2_create">
          <h1>
            {current_user?.result?.name ? <>Edit</> : <>Create</>} Your Chanel
          </h1>
          <input
            type="text"
            name="text"
            placeholder="Enter Your/Chanel Name"
            className="ibox"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            type="text"
            rows={15}
            placeholder="Enter Chanel Description"
            className="ibox"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="submit"
            value={"Submit"}
            className="ibtn"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </>
  );
}

export default CreateEditChanel;
