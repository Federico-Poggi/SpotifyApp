import { Card, Container } from "react-bootstrap";

const SingleSong = (song) => {
  return (
    <>
      {/* mappo cio che ho ottenuto dalla fetch da reduxAction */}
      <Container>
        {song.map((data) => {
          return <Card key={data.id}></Card>;
        })}
      </Container>
    </>
  );
};

export default SingleSong;
