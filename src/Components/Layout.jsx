import { Card, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import SideLibrary from "./SideLibrary";
import styled from "styled-components";

const StyledMain = styled.span`
  #main {
    background-color: #121212;
  }
`;

const Layout = () => {
  return (
    <>
      <div className="d-flex">
        <Col className=" col-2 d-flex flex-column py-2 px-2" id="sideNav">
          <SideBar />

          <SideLibrary />
        </Col>

        <Col className="py-2">
          <StyledMain>
            <Card className="col-12 py-3  px-3 h-100 overflow-auto" id="main">
              <Outlet />
            </Card>
          </StyledMain>
        </Col>
      </div>
    </>
  );
};

export default Layout;
