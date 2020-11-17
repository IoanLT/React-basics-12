import React from "react";
import "./Contact.css";

function Contact({name, avatar, online}) {
  let userStatus = <div>{online ? "Online" : "Offline"}</div>;
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar" />

      <div className="status">
        <h4 className="name">{name}</h4>
        <div
          className={online ? "status-online" : "status-offline"}
        ></div>
        <p className="status-text">{userStatus}</p>
      </div>
    </div>
  );
}

export default Contact;