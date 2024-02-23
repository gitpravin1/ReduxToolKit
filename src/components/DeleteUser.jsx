import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUser } from "../store/slices/userSlices";

function DeleteUser() {

const dispatch = useDispatch();
const deleteAllUser=()=>{
dispatch(clearAllUser());
}

  return (
    <>
      <button  onClick={()=>deleteAllUser()}>Delete All Users</button>
    </>
  );
}

export default DeleteUser;
