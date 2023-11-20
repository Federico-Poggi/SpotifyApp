import { FileText } from "react-bootstrap-icons";

// creo variabili da passara ai reducer
export const QUEEN_SONG = "QUEEN_SONG";
export const KATY_PERRY = "KATY_PERRY";

export const GetMainSongAction = () => {
  return async (dispatch) => {
    try {
      const mainQueenSong = await fetch(
        "http://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      const queenData = await mainQueenSong.json();
      dispatch({
        type: QUEEN_SONG,
        payload: queenData,
      });
      const katyPerryMain = await fetch(
        "http://striveschool-api.herokuapp.com/api/deezer/search?q=kety perry"
      );
      const katyPerry = await katyPerryMain.json();
      dispatch({
        type: KATY_PERRY,
        payload: katyPerry,
      });
    } catch (err) {
      throw new Error("Errore nella Fetch", err);
    }
  };
};
