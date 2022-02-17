import classes from "./StudentCard.module.css";
import { ItemType } from "../constants/item-types";
import { useDrag } from "react-dnd";

const StudentCard = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.STUDENT,
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={classes.studentCard}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h1>{props.number}</h1>
      <h2>{props.name}</h2>
    </div>
  );
};

export default StudentCard;
