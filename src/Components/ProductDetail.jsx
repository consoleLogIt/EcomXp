import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { addToCart } from "../actions";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const { store } = props;
  const { productsReducer } = store.getState();
  const {productDetail} = productsReducer

  const handleAddToCart = (product) => {
    const { cartReducer } = store.getState();
    const {cart} = cartReducer;
   for(let i in cart){
     if(cart[i].id===product.id){
      alert("Already in cart");
      return;
     }
   }

    store.dispatch(addToCart(product));
  };

  const mystyle = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <Container style={{ height: "100vh", padding: "4%" }}>
      <Link style={mystyle} to="/">
        <Tooltip title="go back">
          <IconButton>
            <ArrowBackIcon fontSize="large" />
      </IconButton>
        </Tooltip>
        </Link>
      {productDetail ? (
        <Card style={{ width: "90%", margin: "2% auto" }}>
          <CardContent style={{ display: "flex" }}>
            <Grid md={4}>
              <Typography component="div">
                <img
                  alt="product image"
                  src={productDetail.imgUrl}
                  style={{ width: "258px", height: "250px" }}
                />
              </Typography>
            </Grid>
            <Grid md={7}>
              <Typography
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  margin: "2%",
                }}
              >
                {/* {item.title} */}
              </Typography>
              <Typography
                style={{
                  fontSize: "1.3rem",
                }}
              >
                {productDetail.description}
              </Typography>
              <Typography
                style={{
                  fontSize: "1.2rem",
                  margin: "2%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Rs.{productDetail.price}
                <LocalOfferIcon fontSize="large" style={{ marginLeft: "1%" }} />
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container justify="space-around" md={4}>
              <Rating name="read-only" value={productDetail.rating} readOnly />

              <Button size="small" color="primary">
                Share Now
              </Button>
            </Grid>
            <Grid container justify="center" md={6}></Grid>
            <Grid container justify="center" md={2}>
              <Tooltip title="Add to Cart">
                <IconButton>
                  <AddShoppingCartIcon
                    fontSize="large"
                    onClick={() => handleAddToCart(productDetail)}
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          </CardActions>
        </Card>
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default ProductDetail;
