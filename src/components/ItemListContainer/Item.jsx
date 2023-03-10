import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const Item = ({ elemento }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 600 }}>
      <CardMedia sx={{ height: 350 }} image={elemento.img} title="Catalogo" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${elemento.id}`} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained" color="secondary">
            Detalles del producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
