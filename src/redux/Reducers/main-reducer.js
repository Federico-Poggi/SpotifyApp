import { KATY_PERRY, QUEEN_SONG } from "../Action/index.js";

const initialState = {
  songMain: [],
  katyMain: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUEEN_SONG:
      return {
        ...state,
        songMain: [...state.songMain, action.payload],
      };
    case KATY_PERRY:
      return {
        ...state,
        katyMain: [...state.katyMain, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;
