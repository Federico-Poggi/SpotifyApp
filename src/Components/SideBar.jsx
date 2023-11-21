import { Navbar, Nav, Card } from "react-bootstrap";
import SpotifyBrand from "../assets/logo.png";
import styled from "styled-components";
import { House, Search } from "react-bootstrap-icons";

const StyledP = styled.span`
  font-size: 0.6em;
  margin-left: 5%;
`;

const StyledDiv = styled.div`
  .mainSide {
    background-color: #121212;
  }
`;
const SideBar = () => {
  return (
    <>
      <StyledDiv>
        <Navbar>
          <Card className=" w-100 mx-1 mainSide">
            <Card.Body className="py-2 px-3">
              <Navbar.Brand>
                <img src={SpotifyBrand} alt="logo" width={80} />
              </Navbar.Brand>
              <Nav.Item className="h4 my-3 text-light d-flex align-items-center">
                <House color="white" size={20} />
                <StyledP>Home</StyledP>
              </Nav.Item>
              <Nav.Item className="h4 my-3 text-light d-flex align-items-center">
                <Search color="white" size={20} />
                <StyledP> Search</StyledP>
              </Nav.Item>
            </Card.Body>
          </Card>
        </Navbar>
      </StyledDiv>
    </>
  );
};

export default SideBar;
