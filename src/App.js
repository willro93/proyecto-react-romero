import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const onAdd = (productos) => {
    alert(`Se agregaron al carrito ${productos} productos`);
  };

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola usuario"} />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default App;
