import { Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { GetMainSongAction } from "../redux/Action/index.js";

const Layout = () => {
  

  return (
    <>
      <Container fluid className="d-flex p-0">
        {/*<Col xl={2} className="bg-black ">*/}
        {/*  <SideBar />*/}
        {/*</Col>*/}
        <Col xl={12}>
          <Outlet />
        </Col>
      </Container>
    </>
  );
};

export default Layout;
