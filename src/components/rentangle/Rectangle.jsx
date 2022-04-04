import React from "react";
import "./rectangle.css";
import Grid from "@mui/material/Grid";

const Rectangle = () => {
  return (
    <div>
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

export default Rectangle;
