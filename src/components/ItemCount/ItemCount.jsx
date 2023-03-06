import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from '@mui/material/styles';  //Se agregan para poder agregar otro tipo de colores en MUI
import { green } from '@mui/material/colors'; //Se importa un color en específico

import style from "./ItemCount.module.css";



const ItemCount = () => {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
      //alert("min limit reached");
    }
  };

  const theme = createTheme({
    palette: {
        primary: {
          main: '#43a047',
        },
        secondary: green,
      },
  });  

  return (
    <>
      <div className="main_div">
        <div className={style.centerdiv}>
          <h1>{count}</h1>
          <div className="btn_div">
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
          <Button variant="contained" color="primary" >Agregar al carrito</Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
