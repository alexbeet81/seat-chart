import { Fragment, useState } from "react";
import StudentDesk from "./StudentDesk";
// import StudentCard from "./StudentCard";
import classes from "./SeatChart.module.css";

import { swapDesk } from "../functions/swap-desk";

// fake data
import { DUMMY_STUDENTS } from "../DUMMY_DATA/dummy-students";

// const swapDesk = (id) => {
//   if (!id) {
//     return null;
//   }

//   const student = DUMMY_STUDENTS.filter((student) => student.id === id);

//   console.log(student);

//   return (
    
//       <StudentCard
//         id={student[0].id}
//         number={student[0].studentNumber}
//         name={student[0].name}
//       />
//   );
// };

const renderDesk = (index, students, columns) => {
  // create an empty array.
  let rowOfDesks = [];

  // create an index that is constant from row to row
  const constantIndex = index * columns;

  // populate rowOfDesks equal to the length of the each row - using columns
  for (let i = 0; i < columns; i++) {
    const studentIndex = constantIndex + i;
    if (students[studentIndex] !== undefined) {
      let desk = <StudentDesk key={index}>{swapDesk(students[studentIndex].id, index, DUMMY_STUDENTS)}</StudentDesk>;
      // let desk = (
      //   <StudentDesk key={studentIndex}>
      //     <StudentCard
      //       id={students[studentIndex].id}
      //       number={students[studentIndex].studentNumber}
      //       name={students[studentIndex].name}
      //     />
      //   </StudentDesk>
      // );
      rowOfDesks.push(desk);
    } else {
      rowOfDesks.push(<StudentDesk key={index}>{swapDesk(null)}</StudentDesk>);
    }
  }
  return rowOfDesks;
};

const SeatChart = () => {
  const [rows, setRows] = useState("5");
  const [columns, setColumns] = useState("5");

  const rowsChangeHandler = (state) => {
    setRows(state.target.value);
  };

  const columnsChangeHandler = (state) => {
    setColumns(state.target.value);
  };

  const totalDesks = [...Array(parseInt(rows))].map((element, index) =>
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
          {totalDesks.reverse()}
        </div>
      </div>
    </Fragment>
  );
};

export default SeatChart;
