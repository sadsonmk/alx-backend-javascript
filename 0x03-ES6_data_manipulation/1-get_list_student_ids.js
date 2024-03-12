export default function getListStudentIds(value) {
  if (Array.isArray(value)) {
    return value.map((obj) => obj.id);
  }
  return [];
}
