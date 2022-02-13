import classes from "./StudentCard.module.css";

const StudentCard = (props) => {
  return (
    <div className={classes.studentCard}>
      <h1>{props.number}</h1>
      <h2>{props.name}</h2>
    </div>
  );
};

export default StudentCard;
