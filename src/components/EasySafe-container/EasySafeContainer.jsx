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
          Rento es una alicacion de oferta de inmuebles o espacios donde puedes
          arrendar o publicar tu propiedad, simplificamos el proceso de
          arrendamienro para hacerlo seguro y simple para todos, asegurando el
          pago al propietario y cerificando espacios reales para nuestros
          inquilinos. Rento es loq ue necesitas par publicar, reservar, alquilar
          y pagar tu arriendo de la forma mas fácil y práctica.
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
                Es un productto respaldado por kiosko inmobiliario, una empresa
                qie se dedica a la administación, intermediación y
                comercialiazación de inmuebles en todas sus formas. Kiosko te
                protege ante cualquier eventualidad.
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
