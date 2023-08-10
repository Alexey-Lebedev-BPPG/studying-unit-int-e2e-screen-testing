import validateValue from './validateValue';

// первый аргумент название теста, второй колбэк выполнения
test('Валидация значения', () => {
  // в функцию expect мы передаем вызов функции с аргументами, а с помощью toBe() проверяем ожидаемый результат
  expect(validateValue(50)).toBe(true);
});

// если хотим сделать несколько сценариев, то оборачиваем все в describe
describe('Валидация значения', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('Меньше корректного', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('Больше корректного', () => {
    expect(validateValue(150)).toBe(false);
  });
  test('Пограничное значение снизу', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('Пограничное значение сверху', () => {
    expect(validateValue(100)).toBe(true);
  });
});
