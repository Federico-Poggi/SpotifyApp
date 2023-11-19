import {QUEEN_SONG} from "../Action/index.js";
import {SINGLE_MUSIC} from "../Action/index.js";

const initialState = {
  songMain:[],
  singleMusic:[],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUEEN_SONG:
      return{
        ...state,
        songMain: [...state.songMain, action.payload]
      }
    case SINGLE_MUSIC:
      return {
        ...state,
        singleMusic: [...state.singleMusic, action.payload]
      }
    default:
      return state;
  }
};

export default MainReducer;
