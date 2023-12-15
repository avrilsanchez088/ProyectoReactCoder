import MainRoutes from "./routes/MainRouter"
import "bootstrap/dist/css/bootstrap.min.css";
import products from "../src/data/productos.json";
import { CartProvider } from "./context";
import "./index.css";


function App() {
  return (
    <div>
      <CartProvider>
         <MainRoutes/>
      </CartProvider>
    </div>
  );
}


export default App;