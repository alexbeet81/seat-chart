import { Fragment, useState } from "react";
import StudentDesk from "./StudentDesk";
import StudentCard from "./StudentCard";
import classes from "./SeatChart.module.css";

const DUMMY_STUDENTS = [
  {
    id: "s1",
    studentNumber: "1",
    name: "Burt",
  },
  {
    id: "s2",
    studentNumber: "2",
    name: "Sarah",
  },
  {
    id: "s3",
    studentNumber: "3",
    name: "Michael",
  },
  {
    id: "s4",
    studentNumber: "4",
    name: "Jeff",
  },
  {
    id: "s5",
    studentNumber: "5",
    name: "Sally",
  },
  {
    id: "s6",
    studentNumber: "6",
    name: "Burt",
  },
  {
    id: "s7",
    studentNumber: "7",
    name: "Sarah",
  },
  {
    id: "s8",
    studentNumber: "8",
    name: "Michael",
  },
  {
    id: "s9",
    studentNumber: "9",
    name: "Jeff",
  },
  {
    id: "s10",
    studentNumber: "10",
    name: "Sally",
  },
];

const renderDesk = (deskNumber, students, columns) => {
  const remainingStudents = students.length - deskNumber + 1;
  // make an array equal to length of columns
  let rowOfDesks = [];

  console.log(columns, 'columns line 64');

  for (let i = 0; i < columns; i++) {
    console.log(i, "i on line 67");
    if (students[deskNumber] !== undefined) {
      let desk = (
        <StudentDesk key={deskNumber}>
          <StudentCard
            number={students[deskNumber].studentNumber}
            name={students[deskNumber].name}
          />
        </StudentDesk>
      );
      rowOfDesks.push(desk);
    }
    rowOfDesks.push(<StudentDesk key={deskNumber}>{null}</StudentDesk>);
  }

  console.log(rowOfDesks);

  return rowOfDesks;
};

const SeatChart = () => {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(5);

  const numberOfDesks = rows * columns;

  const rowsChangeHandler = (state) => {
    setRows(state.target.value);
  };

  const columnsChangeHandler = (state) => {
    setColumns(state.target.value);
  };

  const totalDesks = [...Array(numberOfDesks)].map((element, index) =>
    renderDesk(index, DUMMY_STUDENTS, columns)
  );

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
