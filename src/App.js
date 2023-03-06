import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola usuario"}/>
      <ItemCount />
    </div>
  );
}

export default App;
