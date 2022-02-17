import { DUMMY_STUDENTS } from "../DUMMY_DATA/dummy-students";
import StudentCard from "../components/StudentCard";

export const swapDesk = (id) => {
  if (!id) {
    return null;
  }

  const student = DUMMY_STUDENTS.filter((student) => student.id === id);

  return (
    <StudentCard
      id={student[0].id}
      number={student[0].studentNumber}
      name={student[0].name}
    />
  );
};
