import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  idSelected: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        idSelected: action.idSelected,
      };
    default:
      return state;
  }
};

export default reducer;
