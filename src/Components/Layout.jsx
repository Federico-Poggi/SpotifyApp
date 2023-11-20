import { Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <Container fluid className="d-flex p-0">
        <Col xl={2} className="bg-black ">
          <SideBar />
        </Col>

        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
