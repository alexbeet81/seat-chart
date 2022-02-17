import { Fragment, useState } from "react";
import StudentDesk from "./StudentDesk";
import StudentCard from "./StudentCard";
import classes from "./SeatChart.module.css";

const renderDesk = (numberOfStudents, deskNumber) => {
  // if numberOfStudents <= numberOfDesks
  // render the desk with a student.
  // else
  // render the desk without a student.
  // calculate remaing desks
  const remainingStudents = numberOfStudents - deskNumber

  if (remainingStudents >= 1) {
    return <StudentDesk key={deskNumber}><StudentCard number={deskNumber + 1} name="name" /></StudentDesk>
  } else {
    return <StudentDesk key={deskNumber}>{null}</StudentDesk>
  }
};

const SeatChart = () => {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(5);
  const [numberOfStudents, setNumberOfStudents] = useState(10);

  const numberOfDesks = rows * columns;

  const rowsChangeHandler = (state) => {
    setRows(state.target.value);
  };

  const columnsChangeHandler = (state) => {
    setColumns(state.target.value);
  };

  const totalDesks = [...Array(numberOfDesks)].map((element, index) => (
    // <StudentDesk key={index}><StudentCard number={index + 1} name="name" /></StudentDesk>
    renderDesk(numberOfStudents, index)
  ));

  return (
    <Fragment>
      <form>
        <label htmlFor="rows">Rows</label>
        <input
          onChange={rowsChangeHandler}
          id="z"
          type="number"
          min="1"
          value={rows}
        />
        <label htmlFor="columns">Columns</label>
        <input
          onChange={columnsChangeHandler}
          id="x"
          type="number"
          min="1"
          value={columns}
        />
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
