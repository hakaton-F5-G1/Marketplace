import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/getProductById";
import Modal from "./modal";
import "./productsitem.css";

function ProductsItems() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProductById(params.id).then((data) => setProduct(data));
  }, [params.id]);

  return (
    <main>
      {product && (
        <>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <p>{product.phone}</p>
            <p>{product.mail}</p>
            <h2>Contacto:</h2>
          </Modal>
          <Grid item>
            <Typography
              sx={{
                display: "flex",
                margin: "auto 1.1vh",
                justifyContent: "flex-end",
              }}
            >
              <Link id="back-link" to={"/animales"}>
                Volver
              </Link>
            </Typography>
            <Card sx={{ display: "flex", margin: "2vh 1vh" }}>
              <CardMedia
                component="img"
                sx={{ width: 365, display: { xs: "none", sm: "block" } }}
                image={product.image}
                alt="product-image"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  <p>Precio:</p>
                  {product.price}€
                </Typography>
                <Typography variant="body2" paragraph>
                  <Typography varient="subtitle1" color="text.secondary">
                    Descripción:
                  </Typography>
                  {product.description}
                </Typography>
                <Button
                  id="contact-btn"
                  variant="contained"
                  onClick={() => setIsOpen(true)}
                >
                  Contacto
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </main>
  );
}

export { ProductsItems };
