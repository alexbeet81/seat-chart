import { Fragment, useRef, useState } from "react";
import StudentDesk from "./StudentDesk";
import classes from "./SeatChart.module.css";

const SeatChart = () => {
  const [rows, setRows] = useState()
  const [columns, setColumns] = useState()

  const rowsChangeHandler = (state) => {
    setRows(state.target.value)
  }

  const columnsChangeHandler = (state) => {
    setColumns(state.target.value)
  }

  return (
    <Fragment>
      <form>
        <label htmlFor="rows">Rows</label>
        <input onClick={rowsChangeHandler} id="z" type="number" />
        <label htmlFor="columns">Columns</label>
        <input onClick={columnsChangeHandler} id="x" type="number" />
      </form>
      <div className={classes.container}>
        <div
          className={classes.grid}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
          <StudentDesk />
        </div>
      </div>
    </Fragment>
  );
};

export default SeatChart;
