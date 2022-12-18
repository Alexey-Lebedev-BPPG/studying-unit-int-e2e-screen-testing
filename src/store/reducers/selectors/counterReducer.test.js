import counterReducer, { decremented, incremented } from "../counterReducer";

describe("counterReducer", () => {
  test("increment", () => {
    // проверяем. что при передаче стейта и запуске экшена меняется стейт
    expect(counterReducer({ value: 0 }, incremented())).toEqual({ value: 1 });
  });

  test("decrement", () => {
    expect(counterReducer({ value: 0 }, decremented())).toEqual({ value: -1 });
  });

  test("with empty state", () => {
    expect(counterReducer(undefined, incremented())).toEqual({ value: 1 });
    expect(counterReducer(undefined, decremented())).toEqual({ value: -1 });
  });
});