import MainRoutes from "./routes/MainRouter"
import "bootstrap/dist/css/bootstrap.min.css";
import products from "../src/data/productos.json";

import "./index.css";

function App() {
  return (
    <div>
      
      <MainRoutes/>
    </div>
  );
}


export default App;