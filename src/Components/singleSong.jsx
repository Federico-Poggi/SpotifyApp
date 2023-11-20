import { Card, Col } from "react-bootstrap";

const SingleSong = ({ music }) => {
  return (
    <>
      {/* <Col className="col-2"> */}

      <Col className="col-2 mx-2">
        <Card>
          <Card.Img src={music.album.cover_small} />
          <Card.Title>{music.title_short}</Card.Title>
        </Card>
      </Col>

      {/* </Col> */}
    </>
  );
};

export default SingleSong;
