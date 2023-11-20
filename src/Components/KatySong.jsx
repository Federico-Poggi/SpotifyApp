import { Card, Col } from "react-bootstrap";

const KatySong = ({ katy }) => {
  return (
    <>
      <Col className="col-2 mx-2">
        <Card className="border-0">
          <Card.Img src={katy.album.cover_big} />
          <Card.Title className="text-center h6">{katy.title_short}</Card.Title>
        </Card>
      </Col>
    </>
  );
};

export default KatySong;
