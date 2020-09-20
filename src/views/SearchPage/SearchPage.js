import React from 'react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Footer from "components/Footer/Footer.js";
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ProductSection from '../LandingPage/Sections/ProductSection'
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function SearchPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="LinkHub Events"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/nightclub.jpg")}></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>What{"'"}s Happening?</h2>
                <h5 className={classes.description}>Events in your area</h5>
              </GridItem>
            </GridContainer>
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{width: "20rem"}}>
                    <img
                      style={{height: "180px", width: "100%", display: "block"}}
                      className={classes.imgCardTop}
                      src={require("assets/img/grizzhacks.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>GrizzHacks 2020</h4>
                      <p>
                        Join the greatest hackathon on the planet, now being hosted online!
                      </p>
                      <Button color="primary">See Event</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{width: "20rem"}}>
                    <img
                      style={{height: "180px", width: "100%", display: "block"}}
                      className={classes.imgCardTop}
                      src={require("assets/img/jouvert.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Beach Jouvert</h4>
                      <p>
                        Enjoy the wildest party on the island. Paint inclusive!
                      </p>
                      <Button color="primary">See Event</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{width: "20rem"}}>
                    <img
                      style={{height: "180px", width: "100%", display: "block"}}
                      className={classes.imgCardTop}
                      src={require("assets/img/concert.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Steelsillica</h4>
                      <p>
                        Check out the newest rock band on the scene. Playing chords that strike the soul outta you!
                      </p>
                      <Button color="primary">See Event</Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
}
