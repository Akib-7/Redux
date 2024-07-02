export const increment = (countState) => {
  return (dispatch) => {
    dispatch({
      type: "increment",
      payload: countState,
    });
  };
};

export const decrement = (countState) => {
  return (dispatch) => {
    dispatch({
      type: "decrement",
      payload: countState,
    });
  };
};
