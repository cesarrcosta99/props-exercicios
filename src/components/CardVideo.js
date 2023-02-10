import React from "react";
import InfosUsuario from "./InfosUsuario";

function CardVideo(props) {
  console.log(props)
  return (
    <div className="painel-de-videos">
      <InfosUsuario usuario={props.objeto} />
      <InfosUsuario usuario={props.objeto2} />
      <InfosUsuario usuario={props.objeto3} />
      <InfosUsuario usuario={props.objeto4} />
      <InfosUsuario usuario={props.objeto5} />
      <InfosUsuario usuario={props.objeto6} />
      <InfosUsuario usuario={props.objeto7} />
      <InfosUsuario usuario={props.objeto8} />
    </div>
  )
}

export default CardVideo 