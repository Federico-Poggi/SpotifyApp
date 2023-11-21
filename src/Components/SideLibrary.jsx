import { Button, Card } from "react-bootstrap";
import { Collection, Plus } from "react-bootstrap-icons";
import styled from "styled-components";
import Footer from "./Footer";
const StyledP = styled.span`
  font-size: 0.8em;
  margin-left: 5%;
  color: white;
  font-weight: bold;
`;
const StyledDiv = styled.div`
  .mainSide {
    background-color: #121212;
  }
  .lib {
    background-color: #242424;
  }
  .advice {
    color: white;
    font-size: 0.6em;
    font-weight: bold;
    margin-left: 5%;
  }
  Button {
    font-size: 0.6em;
    font-weight: bold;
    margin-left: 5%;
  }
  .bodyCont {
    height: 82vh;
  }
`;

const SideLibrary = () => {
  return (
    <>
      <StyledDiv>
        <Card className="mx-1 mainSide d-flex">
          <Card.Body className="p-0 px-1 d-flex flex-column bodyCont">
            <div className="d-flex align-items-center m-3">
              <Collection size={20} color="white" />
              <StyledP>Your Library</StyledP>
              <Plus color="white" className="ms-auto" size={20} />
            </div>
            <div className="my-2">
              <Card className="lib ">
                <Card.Body className="p-1">
                  <StyledP>Create Your first playlist</StyledP>
                  <p className="advice mt-1">{`It's easy, we'll help you`}</p>
                  <Button className="rounded-pill bg-white border-white text-black py-1 my-2">
                    Create a playlist
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="my-2">
              <Card className="lib">
                <Card.Body className="p-1">
                  <StyledP>Create Your first playlist</StyledP>
                  <p className="advice mt-1">{`It's easy, we'll help you`}</p>
                  <Button className="rounded-pill bg-white border-white text-black py-1 my-2">
                    Create a playlist
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="d-flex justify-content-center flex-grow-1 align-items-end">
              <Footer />
            </div>
          </Card.Body>
        </Card>
      </StyledDiv>
    </>
  );
};

export default SideLibrary;
