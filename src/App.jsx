import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
