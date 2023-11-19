import { Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <Col xl={2} className="bg-black ">
        <SideBar />
      </Col>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
