import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/userSlices";

function DisplayUser() {
    
  const dispatch = useDispatch();
  const onDeleteSingleUsr = (id) => {
    dispatch(removeUser(id));
  };

  const data = useSelector((state) => {
    return state.users;
  });

  return data.map((user, id) => {
    return (
      <li className="liitm" key={id}>
        {user}
        <button
          className="btn"
          onClick={() => {
            onDeleteSingleUsr(id);
          }}
        >
          <MdDeleteForever />
        </button>
      </li>
    );
  });
}

export default DisplayUser;
