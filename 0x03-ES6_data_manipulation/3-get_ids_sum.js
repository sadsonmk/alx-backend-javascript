export default function getStudentIdsSum(students) {
  return students.reduce((total, obj) => total + obj.id, 0);
}
