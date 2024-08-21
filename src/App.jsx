//integrate boostrap for resposive layout
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//components
import { AddTask } from "./components/AddTask";

//styles
import "./styles/App.css"

function App() {

  return (
    <div className="container mainContainer">
      <AddTask />
    </div>
  )
}

export default App
