const axios = require("axios");
const mapArrToString = require("../mapArrToString/mapArrToString");

// пишем функцию для получения данных с бэка (используем jsonplaceholder.typicode.com)
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userId = response.data.map((item) => item.id);
    return mapArrToString(userId);
  } catch (e) {}
};

module.exports = getData;