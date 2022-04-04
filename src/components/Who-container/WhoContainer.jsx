import React from "react";
import Grid from "@mui/material/Grid";
import "./who-container.css";
import kiosko from "../../img/kiosko.png";
import nombre from "../../img/Nombre.png";
import form from "../../img/form.png";

const WhoContainer = () => {
  return (
    <div className="who-container">
      <div className="title-who">
        <h3>¿Quiénes somos?</h3>
      </div>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <div className="info-kiosko">
            <img src={kiosko} alt="" />
            <h3> Kiosko Inmobiliario</h3>
            <div className="whoText">
              <p>
                Somos una inmobiliaria y portal web dedicado a entregar un
                servicio inmobiliario de excelencia y calidad para personas,
                agentes e inmobiliarias creando relaciones de confianza que
                perduren en el tiempo. Cumplimos com las expectativas de tiempos y
                costos de nuestros clientes de acuerdo con las normas y leyes
                vigentes.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className="info-kiosko">
            <img src={nombre} alt="" id="img-two" />
            <h3> Nombre y apellido</h3>
            <div className="whoText">
              <p>
                Ni siquiera los todopoderosos signos de puntuación dominan a los
                textos simulados; una vida, se puede decir, poco ortográfica. Pero
                un buen día, una pequeña línea de texto simulado, llamada Lorem
                Ipsum, decidió aventurarse y salir al vasto mundo de la gramática.
              </p>
            </div>
          </div>
        </Grid>
        <div className="center-img">
          <img src={form} alt="" className="form" />
        </div>
      </Grid>
    </div>
  );
};

export default WhoContainer;
