import classes from "./App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SeatChart from "./components/SeatChart";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SeatChart />
    </DndProvider>
  );
}

export default App;
