import { Fragment, useRef, useState } from "react";
import StudentDesk from "./StudentDesk";
import classes from "./SeatChart.module.css";

const SeatChart = () => {
  const [rows, setRows] = useState(4)
  const [columns, setColumns] = useState(5)

  const numberOfDesks = rows * columns;

  const rowsChangeHandler = (state) => {
    setRows(state.target.value)
  }

  const columnsChangeHandler = (state) => {
    setColumns(state.target.value)
  }

  const totalDesks = [...Array(numberOfDesks)].map((element, index) => <StudentDesk key={index}/>)

  return (
    <Fragment>
      <form>
        <label htmlFor="rows">Rows</label>
        <input onChange={rowsChangeHandler} id="z" type="number" value={rows}/>
        <label htmlFor="columns">Columns</label>
        <input onChange={columnsChangeHandler} id="x" type="number" value={columns}/>
      </form>
      <div className={classes.container}>
        <div
          className={classes.grid}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {totalDesks}
        </div>
      </div>
    </Fragment>
  );
};

export default SeatChart;
