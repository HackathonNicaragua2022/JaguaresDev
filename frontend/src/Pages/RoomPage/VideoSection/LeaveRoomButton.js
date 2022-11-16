import React from "react";
import colgar from '../../../images/colgar_Mesa.png';

function LeaveRoomButton(props) {
  const handleRoomLeave = () => {
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };

  return (
    <div className="video_button_container">
      <img src={colgar} onClick={handleRoomLeave} className="video_button_image"/>
    </div>
  );
}

export default LeaveRoomButton;
