import * as ActionTypes from "./ActionTypes";

export const onSelectProductHandler = (idSelected) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    idSelected,
  };
};
