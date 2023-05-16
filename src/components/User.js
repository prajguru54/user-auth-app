import React from "react";
import "./User.css";

const User = ({ username }) => {
    return (
        <div className=" card user">
            <div >{`User: ${username}`}</div>
        </div>
    );
};

export default User;
