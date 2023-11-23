import { Col, Container, Row } from "react-bootstrap";
import SingleSong from "./singleSongQueen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetMainSongAction } from "../redux/Action/index.js";

// import KatySong from "./KatySong.jsx";

const SongBoard = () => {
  const dispatch = useDispatch();
  const [dati, setDati] = useState([]);
  const [music, setMusic] = useState([]);
  const [katy, setKaty] = useState([]);
  const [katyData, setKatyData] = useState([]);

  useEffect(() => {
    dispatch(GetMainSongAction());
  }, []);

  const dataFromRedux = useSelector((state) => state.song.songMain);
  const katyFromredux = useSelector((state) => state.song.katyMain);
  console.log(dataFromRedux);
  dataFromRedux.map((el) => {
    dati.push(el);
  });
  dati.map((t) => {
    for (let i = 0; i < t.data.length; i++) {
      music.push(t.data[i]);
    }
  });

  katyFromredux.map((ka) => {
    katyData.push(ka);
  });
  katyData.map((k) => {
    for (let i = 0; i < k.data.length; i++) {
      katy.push(k.data[i]);
    }
  });
  return (
    <>
      <Row className="w-100">
        {music.slice(0, 6).map((el) => {
          return <SingleSong key={el.id} music={el} />;
        })}
      </Row>
    </>
  );
};
export default SongBoard;
