import { Link } from "react-router-dom"
import "./products.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Product({ product }) {
    const { id, name, image, price } = product
    return (
        <Link to={`product/${id}`}>
            <Card sx={{ maxWidth: 345 }}>
                <container fixed>
                    <CardMedia
                        component="img"
                        height="300"
                        image={image}
                        alt="product-img"
                    />
                </container>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="green">
                        {price}$
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
export { Product }