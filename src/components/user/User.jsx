import React from "react";

function User({ name, profilePicture }) {
    return (
        <div className="user_Container">
            <p className="user_name">{name}</p>
            <img className="user_picture" src={profilePicture} alt="Avatar" />
        </div>
    );
}

export default User;