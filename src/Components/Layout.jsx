import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import SideLibrary from "./SideLibrary";

const Layout = () => {
  return (
    <>
      <Container fluid className="d-flex p-0 h-100 position-relative">
        <Col xl={2}>
          <Row className="position-fixed top-0 start-0">
            <SideBar />
            <SideLibrary />
          </Row>
        </Col>
        <Row className="w-100 p-5">
          <Col xl={12} className="d-flex ">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
