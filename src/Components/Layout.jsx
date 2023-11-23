import { Card, Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import SideLibrary from "./SideLibrary";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <div className="d-flex">
        <Col lg={2} className="d-flex flex-column py-2 px-2" id="sideNav">
          <SideBar />

          <SideLibrary />
        </Col>

        <Col lg={2}>
          <Card>
            <Outlet />
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Layout;
