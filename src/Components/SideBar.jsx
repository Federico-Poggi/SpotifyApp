import { Col, Navbar, Nav, Container, Button } from "react-bootstrap";
import SpotifyBrand from "../assets/logo.png";
import styled from "styled-components";
import { House, CollectionPlay } from "react-bootstrap-icons";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
const StyledCol = styled.div`
  height: 100vh;
  color: white;
  font-size: 1em;
`;

const SideBar = () => {
  return (
    <>
      <StyledCol>
        <Col className="d-flex flex-column h-100 justify-content-between ">
          <Navbar className="d-flex flex-column ">
            <Navbar.Brand>
              <img src={SpotifyBrand} width={150} alt="logo" />
            </Navbar.Brand>
            <Nav className="d-flex flex-column h-100 align-items-center mt-4 ">
              <Nav.Item className="h4 my-3">
                <House className="mx-2 " color="white" />
                Home
              </Nav.Item>
              <Nav.Item className="h4 my-3">
                <CollectionPlay className="mx-2 " color="white" />
                Library
              </Nav.Item>

              <SearchBar />
            </Nav>
          </Navbar>

          <Container className="d-flex flex-column align-items-center">
            <Col className="col-6">
              <Button className="p-0 w-100 py-2 my-1 rounded-pill bg-transparent border-light">
                Login
              </Button>
              <Button className="p-0 w-100 py-2 rounded-pill my-1 bg-light text-black border-light">
                Sign Up
              </Button>
            </Col>
            <Footer />
          </Container>
        </Col>
      </StyledCol>
    </>
  );
};

export default SideBar;
