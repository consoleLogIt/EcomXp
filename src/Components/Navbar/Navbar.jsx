import React, { Fragment } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const mystyle = {
    color: "inherit",
    textDecoration: "none",
  };
  const matches = useMediaQuery('(max-width:512px)')
  console.log(matches,"matches")

  return (
    <Fragment>
        <Container>
          <div
            style={{
              margin: "2%",
              display: "flex",
              justifyContent: matches? "center": "space-between"
            }}
          >
            <Grid xs={9} sm = {8} md ={6} style = {{display:matches?"none":""}}>
              <Box display="flex" justifyContent="space-between">
                <Typography className={styles.pointer} variant="h4">
                  EcomXp
                </Typography>
                <Typography className={styles.pointer} variant="h6">
                  <Link to="/" style={mystyle}>
                    Products
                  </Link>
                </Typography>
                <Typography className={styles.pointer} variant="h6">
                  <Link to="add-product" style={mystyle}>
                    Add Products
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid xs={3} sm = {2}  >
              <Box display="flex" justifyContent="space-between">
                <Typography className={styles.pointer}>
                  <Badge badgeContent={props.items} showZero color="error">
                    <Link to="cart" style={mystyle}>
                      <ShoppingCartIcon fontSize="large" />
                    </Link>
                  </Badge>
                </Typography>
                <Typography className={styles.pointer}>
                  <AccountCircleIcon fontSize="large" />
                </Typography>
              </Box>
            </Grid>
          </div>
        </Container>
    </Fragment>
  );
}

export default Navbar;
