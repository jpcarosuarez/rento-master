import React from "react";
import Grid from "@mui/material/Grid";
import "./footeer.css";
import logo from "../../img/logo-two.png";

const Footeer = () => {
  return (
    <div className="footeer-container">
      <img src={logo} alt="" />

      <div className="footer-info">
        <Grid container>
          <Grid item xs={12} sm={12} lg={5}>
            <div className="suscribete">
              <h3>Suscriberse</h3>
              <p className="text-suscribete">
                {" "}
                Recibe consejos sobre alquiler en Colombia
              </p>
              <div classNamw="submit-container">
                <input
                  type="text"
                  class="seleccionar"
                  placeholder="Correo Electrónico"
                />
                <input type="submit" value="Enviar" class="enviar-boton" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={2}>
            <div className="conocer-mas">
              <h3> Conocer más</h3>
              <p> Términos y condiciones</p>
              <p> Preguntas Frecuentes</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={2}>
            <div className="contacto">
              <h3> Contacto</h3>
              <p>+57 302 423 6366</p>
              <br />
              <p>Carrera 10 #64 45</p>
              <p>Bogotá, Colombia</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={3}>
            <div className="contacto-two">
              <p> contacto@kioskoinmobiliario.com</p>
              <div className="redes">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footeer;
