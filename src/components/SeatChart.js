import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";

import classes from "./SeatChart.module.css";
import StudentCard from "./StudentCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const STUDNETS = [
  {
    id: "1",
    number: "1",
    name: "Brian",
  },
  {
    id: "2",
    number: "2",
    name: "Sally",
  },
  {
    id: "3",
    number: "3",
    name: "Dave",
  },
];

const SeatChart = () => {
  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  // ];

  const layout = [
    { i: "a", x: 10, y: 10, w: 1, h: 2, static: false },
  ];

  return (
    <div className={classes.seatChart__Container}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {STUDNETS.map((student) => {
          return (
            <div key={student.id}>
              <StudentCard name={student.name} number={student.number} />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};

export default SeatChart;
