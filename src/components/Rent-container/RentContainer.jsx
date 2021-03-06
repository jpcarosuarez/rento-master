import React from "react";
import Grid from "@mui/material/Grid";
import "./rent-container.css";
import form from "../../img/form.png";

const RentContainer = () => {
  return (
    <div className="rent-container">
      <div className="title-rent">
        <h3 className="RentaNecesitoTitulo"> En RENTO no hay límites. <br/>
            Arrienda el espacio que quieras
        </h3>
      </div>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <div className="info">
            <h2>
              <span className="blue"> Rento </span> 
                Una terraza por 6 horas para el cumpleaños de mi hija
            </h2>
            <p>
                Encuentra los espacios que necesitas para eventos y celebraciones.
                Empieza a crear memorias especiales rentando un sitio a partir de
                3 horas.
            </p>
          </div>
        </Grid>

        <Grid item sm={6} xs={12}>
          <div className="info-img">
            <div className="img-one"> </div>
          </div>
        </Grid>

        <Grid item sm={6} xs={12} id="hide">
          <div className="info-img">
            <div className="img-two"> </div>
          </div>
        </Grid>

        <Grid item sm={6} xs={12}>
          <div className="info">
            <h2>
              <spam className="blue"> Rento </spam> un espacio para un
              parqueadero por 5 dias mientras estoy de viaje
            </h2>
            <p>
              Deja tu auto en un parqueadero de confianza por el tiempo que
              necesites y olvidate de procupaciones mientras viajas.
            </p>
          </div>
        </Grid>

        <Grid item sm={6} xs={12} id="view">
          <div className="info-img">
            <div className="img-two"> </div>
          </div>
        </Grid>

        <Grid item sm={6} xs={12}>
          <div className="info">
            <h2>
              <spam className="blue"> Rento </spam> un apartamento en Bopgotá mientras termino la universidad
            </h2>
            <p>
              Rento te ayuda a conseguir un apartamento en arriendo a precio
              justo ¡Encuentra tu siguiente hogar y reservalo hoy!
            </p>
          </div>
        </Grid>

        <Grid item sm={6} xs={12}>
          <div className="info-img">
            <div className="img-three"> </div>
          </div>
        </Grid>
        <div className="center-img">
          <img src={form} alt="" className="form" />
        </div>
      </Grid>
    </div>
  );
};

export default RentContainer;
