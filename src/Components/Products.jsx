import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Tooltip,
  Chip,
} from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import {
  deleteProduct,
  addToCart,
  enableEditMode,
  disableEditMode,
  updatePrice,
  updateDescription,
  updateRatings,
  updateTitle,
  sortByPrice,
  unsort,
  viewProductDetail,
} from "../actions";
import { useHistory } from "react-router-dom";
import EdiText from "react-editext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";

let clickableStatus = true;

function Poducts(props) {
  const { store } = props;
  const { productsReducer } = store.getState();
  const {products} = productsReducer;
  const history = useHistory();

  const handleDeleteProduct = (id) => {
    store.dispatch(deleteProduct(id));
  };

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

  const handleEnableEdit = (id) => {
    store.dispatch(enableEditMode(id));
  };

  const handledisableEdit = (id) => {
    store.dispatch(disableEditMode(id));
  };

  const handleUpdateRating = (id, rating) => {
    store.dispatch(updateRatings(id, rating));
  };

  const handleUpdatePrice = (id, price) => {
    store.dispatch(updatePrice(id, price));
  };

  const handleUpdateDescription = (id, description) => {
    store.dispatch(updateDescription(id, description));
  };

  const handleUpdateTitle = (id, title) => {
    store.dispatch(updateTitle(id, title));
  };
  const handleProductDetail = (product) => {
    store.dispatch(viewProductDetail(product));
    history.push("/product-detail");
  };

  const handleSort = () => {
    clickableStatus = false;
    store.dispatch(sortByPrice());
  };

  const handleUnSort = () => {
    clickableStatus = true;
    store.dispatch(unsort());
  };
  // const {product} = store.getState();
  return (
    <Container style={{ height: "100vh", padding: "4%" }}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {clickableStatus ? (
          <Chip label="Sort by Price" onClick={handleSort} variant="outlined" />
        ) : (
          <Chip
            label="Remove Sort"
            onDelete={handleUnSort}
            variant="outlined"
          />
        )}
      </div>

      {products.length === 0 ? (
        <CircularProgress />
      ) : (
        products.map((item) => (
          <Card style={{ width: "90%", margin: "2% auto" }}>
            <CardContent style={{ display: "flex",cursor:"pointer" }}  onClick={() => {
             return !item.editMode? handleProductDetail(item): null

            } }>
              <Grid md={4}>
                <Typography component="div">
                  <img
                    alt="product image"
                    src={item.imgUrl}
                    style={{
                      width: "258px",
                      height: "250px",
                    }}
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
                  {item.editMode ? (
                    <EdiText
                      type="input"
                      inputProps={{
                        placeholder: "Update Title",
                      }}
                      value={item.title}
                      onSave={(e) => handleUpdateTitle(item.id, e)}
                    />
                  ) : (
                    `${item.title}`
                  )}
                </Typography>
                <Typography
                  style={{
                    fontSize: "1.3rem",
                  }}
                >
                  {item.editMode ? (
                    <EdiText
                      type="textarea"
                      inputProps={{
                        className: "textarea",
                        placeholder: "Type your content here",
                        style: {
                          outline: "none",
                          minWidth: "auto",
                        },
                        rows: 7,
                      }}
                      value={item.description}
                      onSave={(e) => handleUpdateDescription(item.id, e)}
                    />
                  ) : (
                    `${item.description}`
                  )}
                </Typography>
                <Typography
                  style={{
                    fontSize: "1.2rem",
                    margin: "2%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.editMode ? (
                    <EdiText
                      type="input"
                      inputProps={{
                        placeholder: "Update price",
                      }}
                      value={item.price}
                      onSave={(e) => handleUpdatePrice(item.id, e)}
                    />
                  ) : (
                    `Rs. ${item.price}`
                  )}
                  <LocalOfferIcon
                    fontSize="large"
                    style={{ marginLeft: "1%" }}
                  />
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justify="space-around" md={4}>
                {item.editMode ? (
                  <Rating
                    name="simple-controlled"
                    value={item.rating}
                    onChange={(e, value) => handleUpdateRating(item.id, value)}
                  />
                ) : (
                  <Rating name="read-only" value={item.rating} readOnly />
                )}

                <Button disabled={item.editMode} size="small" color="primary">
                  Share Now
                </Button>
              </Grid>
              <Grid container justify="center" md={6}>
                <Tooltip title={item.editMode ? "Disable Edit" : "Enable Edit"}>
                  <IconButton>
                    {item.editMode ? (
                      <CloseIcon
                        fontSize="large"
                        style={{ margin: "0 5%" }}
                        onClick={() => handledisableEdit(item.id)}
                      />
                    ) : (
                      <EditIcon
                        fontSize="large"
                        style={{ margin: "0 5%" }}
                        onClick={() => handleEnableEdit(item.id)}
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton disabled = {item.editMode}>
                    <DeleteIcon
                      fontSize="large"
                      onClick={() => handleDeleteProduct(item.id)}
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid container justify="center" md={2}>
                <Tooltip title="Add to Cart">
                <IconButton disabled = {item.editMode}>
                    <AddShoppingCartIcon
                      fontSize="large"
                      onClick={() => handleAddToCart(item)}
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            </CardActions>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Poducts;
