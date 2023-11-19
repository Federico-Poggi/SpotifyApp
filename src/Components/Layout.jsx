import { Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { GetMainSong } from "../redux/Action";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMainSong());
    console.log("ho provato a fetchare");
  });
  return (
    <>
      <Container fluid className="d-flex p-0">
        <Col xl={2} className="bg-black ">
          <SideBar />
        </Col>
        <Col xl={8}>
          <Outlet />
        </Col>
      </Container>
    </>
  );
};

export default Layout;
