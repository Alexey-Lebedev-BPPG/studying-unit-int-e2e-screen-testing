// указываем через ? и ||, чтоб не падали тесты при передаче пустого стейта
export const getCounterValue = (state) => state?.counter?.value || 0;
