//agr countState mein kuch nhi hy then it will take 0 otherwise the actual countState will be set
const countStateReducer = (countState = 0, action) => {
  if (action.type === "increment") {
    return countState + action.payload;
  } else if (action.type === "decrement" && countState > 0) {
    return countState - action.payload;
  } else {
    return countState;
  }
};
export default countStateReducer;
