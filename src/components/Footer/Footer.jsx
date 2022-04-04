import './Footer.css'
import {AppBar,Toolbar,Typography,makeStyles,Button,IconButton,Drawer, MenuItem,} from "@material-ui/core";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
     padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    backgroundColor:'red',
    color:'white',
  }));
  
  export default function Footer() {
    return (
      <footer>
{/* <AppBar position="relative"> */}

      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={0}>
         
        <Grid item sm={4} xs={12}>
            <Item elevation={0}><h3 style={{color:'white'}}>Rento. todos los derechos reservados.</h3></Item>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Item elevation={0} >
            <img className='rentoStuffPics' src="https://dummyimage.com/100x100/000000/fff.jpg" alt="" />
            </Item>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Item elevation={0}><h3>Contacto</h3>
           
               <InstagramIcon style={{TextDecoration:'none', color:'white',paddingRight:'1rem',paddingLeft:'1rem',fontSize:'2rem',cursor:'pointer',}} onClick={e=> window.location.href='http://www.instagram.com'}/>

               <FacebookIcon style={{TextDecoration:'none', color:'white',paddingRight:'1rem',paddingLeft:'1rem',fontSize:'2rem',cursor:'pointer',}} onClick={e=> window.location.href='http://www.instagram.com'}/>

               <WhatsAppIcon style={{TextDecoration:'none', color:'white',paddingRight:'1rem',paddingLeft:'1rem',fontSize:'2rem',cursor:'pointer',}} onClick={e=> window.location.href='http://www.instagram.com'}/>


          

            </Item>
          </Grid>

        </Grid>
      </Box>
      {/* </AppBar> */}
      </footer>  
    );
  }
  

