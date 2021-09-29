const initialState = {
  id: 0,
  jwt: "",
  name: "",
  email: "",
  age: 0,
  weight: 0,
  height: 0,
  sex: 0,
  program: 0,
  exes:0,
};
const userReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN") {
    return {
      ...state,
      id: action.id,
      jwt: action.jwt,
      name: action.name,
      email: action.email,
      age: action.age,
      weight: action.weight,
      height: action.height,
      sex: action.sex,
      program: action.program,
    };
  }
  if (action.type === "LOG_OUT") {
    return {
      ...state,
      id: 0,
      jwt: "",
      name: "",
      email: "",
      age: 0,
      weight: 0,
      height: 0,
      sex: 0,
      program: 0,
    };
  }
  if (action.type === "RETRIEVE_TOKEN") {
    return {
      ...state,
      jwt: action.payload,
    };
  }
  if (action.type === "SET_PROGRAM") {
    return {
      ...state,
      program: action.payload,
    };
  }
  if (action.type === "DO_EX") {
    return {
      ...state,
      exes: state.exes+1,
    };
  }
  return state;
};
export default userReducer;
