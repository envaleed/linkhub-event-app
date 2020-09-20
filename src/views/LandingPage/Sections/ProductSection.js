import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles({ ...styles, ...imagesStyles, ...cardTitle });

export default function ProductSection() {
  const classes = useStyles();
  return (
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
  );
}
