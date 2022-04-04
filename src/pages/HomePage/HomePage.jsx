import React from "react";
import "./HomePage.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HouseIcon from "@mui/icons-material/House";
import HttpsIcon from "@mui/icons-material/Https";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import logo from "../../img/logo.png";
import banner from "../../img/banner.jpg";
import WhoContainer from "../../components/Who-container/WhoContainer";
import EasySafeContainer from "../../components/EasySafe-container/EasySafeContainer";
import RentContainer from "../../components/Rent-container/RentContainer";
import {Slideshow, Slide, TextoSlide} from '../../components/Slideshow/Slideshow'
import slider1 from '../../../src/img/slider1.png'
import slider2 from '../../../src/img/slider2.png'
import slider3 from '../../../src/img/slider3.png'


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
                <button className="btnRenta">Renta un Espacio</button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Item elevation={0}>
              <img className="img-banner" src={banner} alt="" />
            </Item>
          </Grid>

         
            <Grid item style={{marginTop:"3rem",marginBottom:"10.5rem",backgroundColor:'#E7E6F3',}} xs={4}>
                  <HouseIcon style={{color:'#385697',fontSize:'6rem',marginLeft:'41%',backgroundColor:'#E7E6F3',}}/>
                  <Item elevation={0} style={{backgroundColor:'#E7E6F3',}}><h3>Arrenda inmuebles desde 3 horas hasta 99 años.</h3></Item>
                </Grid>

                <Grid item style={{marginTop:"3rem",marginBottom:"10.5rem",backgroundColor:'#E7E6F3',}} xs={4}>
                  <HttpsIcon style={{marginTop:'.9rem',color:'#385697',fontSize:'5rem',marginLeft:'41%',backgroundColor:'#E7E6F3',}}/>
                  <Item elevation={0} style={{backgroundColor:'#E7E6F3',}}><h3>Es seguro para arrendadores y para arrendatarios.</h3></Item>
                </Grid>

                <Grid item style={{marginTop:"3rem",marginBottom:"10.5rem",backgroundColor:'#E7E6F3',}} xs={4}>
                  <LocalOfferIcon style={{marginTop:'.9rem', color:'#385697',fontSize:'5rem',marginLeft:'41%',backgroundColor:'#E7E6F3',}}/>
                  <Item elevation={0} style={{backgroundColor:'#E7E6F3',}}><h3>Con las tazas mas bajas de Colombia.</h3></Item>
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
                       <h2> <strong>$1.120.000</strong> </h2>
                       <h3>Apartamento en Chabinero</h3>
                        <p className="sliderText">Empacó sus siete versales, enfundó su inicial en el cinturón y se puso en camino. Cuando ya había escalado las primeras colinas de las montañas cursivas, se dio media vuelta para dirigir su mirada por última vez, hacia su ciudad natal Letralandia, el encabezamiento del pueblo.</p>
          </TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.google.com">
						<img src={slider2} alt=""/>
					</a>
					<TextoSlide>   
                       <h2> <strong>$1.120.000</strong> </h2>
                       <h3>Apartamento en Medillín</h3>
                        <p className="sliderText">Empacó sus siete versales, enfundó su inicial en el cinturón y se puso en camino. Cuando ya había escalado las primeras colinas de las montañas cursivas, se dio media vuelta para dirigir su mirada por última vez, hacia su ciudad natal Letralandia, el encabezamiento del pueblo.</p>
          </TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.google.com">
						<img src={slider3} alt=""/>
					</a>
					<TextoSlide>   
                       <h2> <strong>$1.120.000</strong> </h2>
                       <h3>Apartamento en Bogotá</h3>
                      <p className="sliderText">Empacó sus siete versales, enfundó su inicial en el cinturón y se puso en camino. Cuando ya había escalado las primeras colinas de las montañas cursivas, se dio media vuelta para dirigir su mirada por última vez, hacia su ciudad natal Letralandia, el encabezamiento del pueblo.</p>
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

