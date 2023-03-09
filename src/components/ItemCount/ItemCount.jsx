import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles"; //Se agregan para poder agregar otro tipo de colores en MUI
import { green } from "@mui/material/colors"; //Se importa un color en específico
import style from "./ItemCount.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > initial) setCount(count - 1);
    else {
      setCount(initial);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#43a047",
      },
      secondary: green,
    },
  });

  return (
    <>
      <div className={style.centerdiv}>
        <h1>{count}</h1>
        <div className={style.buttonStyle}>
          <Tooltip title="Agregar Productos">
            <Button onClick={sumar}>
              <AddIcon />
            </Button>
          </Tooltip>
          <Button onClick={restar}>
            <RemoveIcon />
          </Button>
        </div>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
};

export default ItemCount;
