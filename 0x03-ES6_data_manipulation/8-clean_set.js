export default function cleanSet(set, startString) {
  if (!startString) return '';

  let value = '';
  for (const str of set) {
    if (str.startsWith(startString)) {
      value += `${str.slice(startString.length)}-`;
    }
  }
  return value.endsWith('-') ? value.slice(0, -1) : value;
}
