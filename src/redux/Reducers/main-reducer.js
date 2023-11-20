import { QUEEN_SONG } from "../Action/index.js";

const initialState = {
  songMain: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUEEN_SONG:
      return {
        ...state,
        songMain: [...state.songMain, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;
