// import { useSelector } from "react-redux";
import SongBoard from "./SongBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetMainSongAction } from "../redux/Action/index.js";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SingleSong from "./singleSong.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const [dati, setDati] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    dispatch(GetMainSongAction());
  }, []);

  const dataFromRedux = useSelector((state) => state.song.songMain);
  console.log(dataFromRedux);
  dataFromRedux.map((el) => {
    dati.push(el);
  });
  dati.map((t) => {
    for (let i = 0; i < t.data.length; i++) {
      music.push(t.data[i]);
    }
  });

  return (
    <>
      <Container className="d-flex flex-wrap mt-4">
        <Row className="w-100 justify-content-center">
          <Col className=" d-flex">
            {music.slice(0, 6).map((el) => {
              return <SingleSong key={el.id} music={el} />;
            })}
          </Col>
        </Row>

        <Row>
          <h3>ciao</h3>
        </Row>
      </Container>
    </>
  );
};
export default Home;
