import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleSong from "./singleSong";

const SongBoard = () => {
  const SongFromRedux = useSelector((state) => state.songMain);
  return (
    <>
      <Container>
        <SingleSong song={SongFromRedux} />
      </Container>
    </>
  );
};
export default SongBoard;
