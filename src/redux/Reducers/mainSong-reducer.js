import { QUEEN_SONG } from "../Action";

const initialState = {
  song: {},
};

const mainSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUEEN_SONG:
      return {
        ...state,
        song: action.payload,
      };
    default:
      return state;
  }
};

export default mainSongReducer;
