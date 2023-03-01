import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola usuario"}/>
    </div>
  );
}

export default App;
