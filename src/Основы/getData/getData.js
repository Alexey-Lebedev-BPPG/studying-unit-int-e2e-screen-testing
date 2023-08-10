import axios from 'axios';
import mapArrToString from '../mapArrToString/mapArrToString';

// пишем функцию для получения данных с бэка (используем jsonplaceholder)
const getData = async () => {
  try {
    // делаем запрос
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    // получем все айди
    const userId = response.data.map((item) => item.id);
    // преобразовываем все в строки
    return mapArrToString(userId);
  } catch (e) {
    console.log(e);
  }
};

export default getData;
