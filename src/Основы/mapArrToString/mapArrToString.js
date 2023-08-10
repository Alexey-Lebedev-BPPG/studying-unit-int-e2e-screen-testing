const mapArrToString = (arr) =>
  arr.filter((item) => Number.isInteger(item)).map(String);

export default mapArrToString;
