import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";

const onAdd = (productos) => {
  alert(`Se agregaron al carrito ${productos} productos`);
};

const Item = ({ elemento }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 550}}>
      <CardMedia sx={{ height: 200}} image={elemento.img} title="Catalogo" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Más información</Button>
      </CardActions>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </Card>
  );
};

export default Item;
