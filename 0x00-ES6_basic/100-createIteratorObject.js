export default function createIteratorObject(report) {
  const value = Object.values(report);
  const items = Object.values(value[0]);
  const newArray = items.flat();
  return newArray;
}
