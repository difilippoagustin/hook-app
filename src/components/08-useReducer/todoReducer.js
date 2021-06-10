export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "delete":
      return state.filter((todo) => todo.id !== payload);
    case "check":
      return state.map((item) =>
        item.id === payload ? { ...item, done: !item.done } : item
      );

    default:
      return state;
  }
};
