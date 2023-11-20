import { Card, Col } from "react-bootstrap";

const SingleSong = ({ music }) => {
  return (
    <>
      <Col className="col-2 mx-2">
        <Card className="border-0">
          <Card.Img src={music.album.cover_small} />
          <Card.Title className="text-center h6">
            {music.title_short}
          </Card.Title>
        </Card>
      </Col>
    </>
  );
};

export default SingleSong;
