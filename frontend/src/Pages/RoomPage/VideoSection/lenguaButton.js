import React from "react";
import lengua from '../../../images/Lenguadeseñas_Mesa.png';

function lenguaButton(props) {
  const Traduccion = () => {

  };

  return (
    <div className="video_button_container">
      <img src={lengua} onClick={Traduccion} className="video_button_image"/>
    </div>
  );
}

export default lenguaButton;
