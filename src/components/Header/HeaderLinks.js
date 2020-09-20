/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
// @material-ui/icons
import Search from "@material-ui/icons/Search";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <CustomInput
        white
        inputRootCustomClasses={classes.inputRootCustomClasses}
        formControlProps={{
          className: classes.formControl
        }}
        inputProps={{
          placeholder: "Search",
          inputProps: {
            "aria-label": "Search",
            className: classes.searchInput
          }
        }}
      />

      <Link to="/search-page">
        <Button justIcon round color="white">
          <Search className={classes.searchIcon} />
        </Button>
      </Link>
       
      <Link to="/profile-page">
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <AccountCircle/>
          </Button>
      </ListItem>
      </Link>
    </List>
  );
}
