export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const newGrade = newGrades.find((grade) => grade.studentId === obj.id);
      return { ...obj, grade: newGrade ? newGrade.grade : 'N/A' };
    });
}
