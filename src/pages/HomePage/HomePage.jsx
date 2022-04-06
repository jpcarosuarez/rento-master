import React from "react";
import "./HomePage.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//import HouseIcon from "@mui/icons-material/House";
//import HttpsIcon from "@mui/icons-material/Https";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
//import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import logo from "../../img/logo.png";
import banner from "../../img/banner.jpg";
import WhoContainer from "../../components/Who-container/WhoContainer";
import EasySafeContainer from "../../components/EasySafe-container/EasySafeContainer";
import RentContainer from "../../components/Rent-container/RentContainer";
import {Slideshow, Slide, TextoSlide} from '../../components/Slideshow/Slideshow'
import slider1 from '../../../src/img/1Habitacion.jpg';
import slider2 from '../../../src/img/2habitacionesA.jpg';
import slider3 from '../../../src/img/oficina.jpg';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div className="HomePage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item style={{}} xs={12} sm={12} lg={6}>
            <Item elevation={0}>
              <div className="banner-container">
                <h2 className="BuscoRento">
                  ¿Necesitas un  espacio 
                  <br /> para crear tus sueños?
                </h2>
                <img src={logo} className="logo-home" alt="" />
                <button className="btnRenta">Renta espacios disponibles en tu zona</button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Item elevation={0}>
              <img className="img-banner" src={banner} alt="" />
            </Item>
          </Grid>

         
                <Grid item style={{marginTop:"3rem",marginBottom:"10.5rem",backgroundColor:'#E7E6F3',}} xs={4}>
                  <LocationSearchingIcon style={{marginTop:'1rem', color:'#385697',fontSize:'3rem',marginLeft:'41%',backgroundColor:'#E7E6F3',}}/>
                  <Item elevation={0} style={{backgroundColor:'#E7E6F3', fontSize:'3rem'}}><h3> Encuentra espacios para arriendos por horas, días, meses o años.</h3></Item>
                </Grid>

                <Grid item style={{marginTop:"3rem",marginBottom:"10.5rem",backgroundColor:'#E7E6F3',}} xs={4}>
                  <CheckCircleOutlineIcon style={{marginTop:'1rem',color:'#385697',fontSize:'3rem',marginLeft:'41%',backgroundColor:'#E7E6F3',}}/>
                  <Item elevation={0} style={{backgroundColor:'#E7E6F3', fontSize:'3rem'}}><h3>Conoce más acerca de los espacios, medidas, pagos, mensualidades, contratos. ¡Y escógelo!</h3></Item>
                </Grid>

                <Grid item style={{marginTop:"3rem",marginBottom:"10.5rem",backgroundColor:'#E7E6F3',}} xs={4}>
                  <EventAvailableIcon style={{marginTop:'1rem', color:'#385697',fontSize:'3rem',marginLeft:'41%',backgroundColor:'#E7E6F3',}}/>
                  <Item elevation={0} style={{backgroundColor:'#E7E6F3', fontSize:'3rem'}}><h3>Reserva fácilmente y en pocos pasos el espacio de tus sueños.</h3></Item>
                </Grid>
         

          <RentContainer />

          <Grid item sm={12} xs={12}>
            
            {/* SLIDESHOW */}
          <div className="slideShowContainer">
          <Slideshow controles={false} autoplay={true} velocidad="2000" intervalo="6000">
				    <Slide >
              <a href="https://www.google.com">
                <img src={slider1} alt=""/>
              </a>
              <TextoSlide>   
                <h2> <strong>$1.550.000</strong> / Mensual </h2>
                <h3>Apartamento en Chapinero</h3>
                <p className="sliderText">Apartamento de una habitación un baño desde 42 mts2, consta de sala comedor, cocina con zona húmeda con lavadero y espacio para la lavadora, tendedero de ropas, habitación con closet en carpintería, ventanas con cortina roller, balcón exterior, estufa y ducha a gas natural, finas terminaciones, estrato 4.</p>
              </TextoSlide>
				    </Slide>

				    <Slide>
              <a href="https://www.google.com">
                <img src={slider2} alt=""/>
              </a>
              <TextoSlide>   
                  <h2> <strong>$1.900.000</strong> / Mensual</h2>
                  <h3>Apartamento 2 Habitaciones en Chapinero</h3>
                  <p className="sliderText">Apartamento de 58 mts2, consta de 2 habitaciones 2 baños, sala-comedor, cocina con zona húmeda con tendedero y lavadero, igualmente con espacio para la lavadora, habitaciones con closet en carpintería y cortinas, apartamento exterior con balcón.</p>
              </TextoSlide>
				    </Slide>

				    <Slide>
              <a href="https://www.google.com">
                <img src={slider3} alt=""/>
              </a>
					  <TextoSlide>   
                  <h2> <strong>$120.000</strong> / Diario</h2>
                  <h3>Oficina en Barrios unidos</h3>
                  <p className="sliderText">Oficina de 20 mts2 económica que incluye servicios, ubicada en un exclusivo sector de Chapinero con flujo considerable de personas por la vía, frente a una estación de Transmilenio y radio Caracol. </p>
            </TextoSlide>
				    </Slide>


			    </Slideshow>
          </div>
          {/* FIN DE SLIDESHOW */}
          </Grid>

          <EasySafeContainer />
          <WhoContainer />
        </Grid>
      </Box>
    </div>
  );
}

