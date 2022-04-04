import React from "react";
import "./welcome-container.css";
import Grid from "@mui/material/Grid";
import logo from "../../img/logo.png";
import banner from "../../img/banner.jpg";

const WelcomeContainer = () => {
  return (
    <div className="welcome-container">
      <Grid container>
        <Grid item xs={12} sm={12} lg={5}>
          <div className="text-container">
            <div className="text">
              <h1>
                Busco <br /> Encuentro
              </h1>

              <img src={logo} className="logo-home" alt="" />
              <br />
              <br />
              <button className="btnRenta">Renta un Espacio</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} lg={7}>
          <div className="img-welcome">
            <img className="img-banner" src={banner} alt="" />
          </div>
        </Grid>
      </Grid>
      <div className="r-container">
        <Grid container className="r-content">
          <Grid item xs={4}>
            <p>Arrenda inmuebles desde 3 horas hasta 99 años</p>
          </Grid>

          <Grid item xs={4}>
            <p>Es seguro para arrendadores y para arrendatarios</p>
          </Grid>

          <Grid item xs={4}>
            <p>Con las tazas mas bajas del territorio Colombiano</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WelcomeContainer;
