export const todoReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [
          ...state.list,
          { data: action.payload.data, id: action.payload.id },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter(
        (newState) => newState.id !== action.id
      );
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_ALL":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
