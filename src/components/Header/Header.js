//import {AppBar,Toolbar,Typography,makeStyles,Button,IconButton,Drawer,Link, MenuItem,} from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './header.css';
import rentoLogo from '../../img/rentoLogo.svg';

const headersData = [
  {
    label: "¿Qué espacios puedo rentar?",
    href: "/renta",
  },
  {
    label: "¿Cómo Funciona?",
    href: "/funcionamiento",
  },
  {
    label: "Sobre Nosotros",
    href: "/nosotros",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
  {
    label: "Renta un espacio",
    href: "/rentaEspacio",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#3B5998",
    // paddingRight: "79px",
    // paddingLeft: "118px",
    paddingRight: "0",
    paddingLeft: "0",
    position: "fixed",
    top: "0",
    left: "0",
    overflow: "auto",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    display:"none",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 100,
    color: "#FFFEFE",
    textDecoration: "none",  
  },

  // rentoLogo: {
  //   height:"80px",
  //   width:"auto",
  // },

  menuButton: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  logoStyle: {
    "@media (min-width: 501px)": {
      marginRight: "70%",
    },

    "@media (max-width: 500px)": {
      marginRight: "45%",
      padding: "20px 30px",
    },
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer, logoStyle } =
    useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {rentologo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className={logoStyle}>{rentologo}</div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const rentologo = (
    <Link to="/" style={{ textDecoration: "none" }}>
      {/* <Typography variant="h6" component="h1" className={logo}>
   Rento. 
    </Typography> */}

      <h1 className={logo}>
        <strong> R</strong>ento.
      </h1>
      <a href="/" >
        <img className="rentoLogo" src={rentoLogo} alt="rento Logo" />
      </a>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
