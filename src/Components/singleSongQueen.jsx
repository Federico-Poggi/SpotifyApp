import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1em;
`;

const SingleSong = ({ music }) => {
  return (
    <>
      <StyledDiv className="border-0 d-flex flex-column align-items-center w-25">
        <img
          className="rounded-3"
          width={150}
          src={music.album.cover}
          alt="img"
        />
        <Card.Title className="h6 text-light text-break">
          {music.title_short}
        </Card.Title>
      </StyledDiv>
    </>
  );
};

export default SingleSong;
