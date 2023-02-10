import React from "react";

function InfosUsuario(props) {
    console.log(props)

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                {props.usuario.imagem}
                <h4>{props.usuario.titulo}</h4>
            </div>
        </div>
    )
}

export default InfosUsuario 