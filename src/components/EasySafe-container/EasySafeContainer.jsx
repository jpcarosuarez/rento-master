import React from "react";
import Grid from "@mui/material/Grid";
import "./easy-safe-container.css";
import garden from "../../img/garden.png";
import key from "../../img/key.png";
import form from "../../img/form.png";

const EasySafeContainer = () => {
  return (
    <div className="easy-safe-container">
      <div className="title-easy-safe">
        <h3 className="RentaNecesitoTitulo">
          ¡Arrendar nunca fue tan <spam className="blue"> Fácil </spam> y{" "}
          <span className="blue"> Seguro </span>!{" "}
        </h3>
        <p className="p-title">
          RENTO es una aplicación de oferta de inmuebles o 
          espacios donde puedes arrendar o publicitar tu propiedad, 
          simplificamos el proceso de arrendamiento para hacerlo seguro 
          y simple para todos, asegurando el pago al propietario y certificando 
          espacios reales para nuestros inquilinos. Rento es lo que 
          necesitas para publicar, reservar, alquilar y pagar tu arriendo 
          de la forma más fácil y práctica. Puedes alquilar diferentes espacios, 
          desde un parqueadero por días, un apartamento por años, o un restaurante 
          para celebrar un cumpleaños por 6 horas. 
        </p>
      </div>
      <div className="info-easy-safe">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div className="img-center">
              <img src={garden} alt="" />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div>
              <p className="p-info">
                Plataforma respaldada por Kiosko Inmobiliario, una empresa inmobiliaria
                que se dedica a la administación, intermediación y
                comercialiazación de inmuebles en todas sus formas. <br/> MA:2018122
              </p>
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className="img-center">
              <img src={key} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="img-center">
        <img src={form} alt="" className="form" />
      </div>
    </div>
  );
};

export default EasySafeContainer;
