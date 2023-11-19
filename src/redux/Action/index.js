// creo variabili da passara ai reducer
export const QUEEN_SONG = "QUEEN_SONG";
export const SINGLE_MUSIC='SINGLE_MUSIC'
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
    } catch (err) {
      throw new Error("Errore nella Fetch", err);
    }
  };
};

export const DataInArray=(music)=>{
  return (dispatch)=>{
    dispatch({
      type: SINGLE_MUSIC,
      payload: music,
             })
  }
  
}
