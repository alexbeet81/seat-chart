import classes from "./StudentDesk.module.css";
import { ItemType } from "../constants/item-types";
import { useDrop } from "react-dnd";
import { swapDesk } from "../functions/swap-desk";

const StudentDesk = ({ children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.STUDENT,
    drop: (item, monitor) => swapDesk(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver && "#e7d299"}}
      className={classes.desk}
    >
      {children}
    </div>
  );
};

export default StudentDesk;
