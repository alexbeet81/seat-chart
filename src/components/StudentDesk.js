import classes from './StudentDesk.module.css';

const StudentDesk = ({children}) => {
  return <div className={classes.desk}>{children}</div>
};

export default StudentDesk;