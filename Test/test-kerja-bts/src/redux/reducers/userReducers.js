const initialState = {
  token: "",
};
const userReducer = (state = initialState, actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case "GET_TOKEN":
      return {
        ...state,
        token: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
