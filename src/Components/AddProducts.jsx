import React,{useRef} from "react";
import {Container,Button,Card,CardContent,Typography,TextField} from "@material-ui/core/";
import {addProduct} from '../actions';




function AddProducts(props) {
    const urlRef= useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const ratingsRef = useRef(null);
    const {store}  = props;

    const handleAddProduct  = () => {
        const product = {
            imgUrl:urlRef.current.childNodes[1].childNodes[0].value,
            title : nameRef.current.childNodes[1].childNodes[0].value,
            description :  descriptionRef.current.childNodes[1].childNodes[0].value,
            price : priceRef.current.childNodes[1].childNodes[0].value,
            rating: ratingsRef.current.childNodes[1].childNodes[0].value

        }

        console.log(product)
        store.dispatch(addProduct(product));

     

    }

  return (
    <Container style={{ height: "100vh", padding: "2%" }}>
      <Card style={{ width: "90%", margin: "2% auto" }}>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Add Product
          </Typography>
          </CardContent>
          <CardContent> <TextField ref ={nameRef} fullWidth label="Name" variant="outlined" /></CardContent>
          <CardContent> <TextField ref ={descriptionRef} fullWidth label="Description" variant="outlined" /></CardContent>
          <CardContent> <TextField ref ={priceRef} fullWidth label="Price" variant="outlined" /></CardContent>
          <CardContent> <TextField ref ={ratingsRef} fullWidth label="Rating out of 5" variant="outlined" /></CardContent>
          <CardContent> <TextField ref ={urlRef} fullWidth label="Product Image Url" variant="outlined" /></CardContent>
          <CardContent><Button variant="contained" color="primary" onClick = {handleAddProduct}>
        Add
      </Button> </CardContent>
      </Card>
    </Container>
  );
}

export default AddProducts;
