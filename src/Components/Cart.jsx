import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { removeFromCart } from "../actions";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

function Cart(props) {
  const { store } = props;
  const { cartReducer } = store.getState();
  const {cart}  = cartReducer

  const handleRemovFromCart = (product) => {
    store.dispatch(removeFromCart(product));
  };
  return (
    <Container
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {cart.length === 0 ? (
        <Typography style={{ fontSize: "2rem" }}>Cart is Empty</Typography>
      ) : (
        cart.map((item) => (
          <Card style={{ minWidth: "25%", margin: "4% 2%" }}>
            <Box display="flex" alignContent="center">
              <CardContent>
                <Typography component="div">
                  <img
                    alt="product image"
                    src={item.imgUrl}
                    style={{ width: "258px", height: "250px" }}
                  />
                </Typography>
              </CardContent>
            </Box>
            <CardActions>
              <Grid container justify="space-around" md={6}>
                <Rating name="read-only" value={item.rating} readOnly />
                <Tooltip title="Remove">
                  <IconButton>
                    <RemoveShoppingCartIcon
                      onClick={() => handleRemovFromCart(item.id)}
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid container justify="space-around" md={6}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      margin: "2%",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "1.2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "2%",
                    }}
                  >
                    Rs.{item.price}
                    <LocalOfferIcon />
                  </Typography>
                </Box>
              </Grid>
            </CardActions>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Cart;
