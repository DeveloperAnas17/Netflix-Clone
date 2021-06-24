import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SettingsIcon from "@material-ui/icons/Settings";

function Sidebar() {
  return (
    <Container>
      <Logo>
        <h2>Netflix</h2>
      </Logo>
      <Menu>
        <h5>Menu</h5>

        <div>
          <span>
            <SettingsIcon />
          </span>
          <a>Browse</a>
        </div>

        <div>
          <span>
            <SettingsIcon />
          </span>
          <a>Browse</a>
        </div>
      </Menu>

      <Social>
        <h5>Social</h5>

        <div>
          <span>
            <SettingsIcon />
          </span>
          <a>Browse</a>
        </div>

        <div>
          <span>
            <SettingsIcon />
          </span>
          <a>Browse</a>
        </div>
      </Social>

      <General>
        <h5>General</h5>

        <div>
          <span>
            <SettingsIcon />
          </span>
          <a>Setting</a>
        </div>

        <div>
          <span>
            <SettingsIcon />
          </span>
          <a>Browse</a>
        </div>
      </General>
    </Container>
  );
}

const Container = styled.div`
  flex: 0.2;
  height: 100%;
  min-width: 150px;
  /* border-right: 1px solid gray; */
  padding: 20px 30px;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  h2 {
    color: white;
  }
`;
const Menu = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;

  h5 {
    color: gray;
    margin-bottom: 25px;
  }

  div {
    margin-top: 10px;
    color: #51515c;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    color: #f1f4ff;

    span {
      margin-right: 8px;
    }
  }
`;
const Social = styled(Menu)``;
const General = styled(Menu)``;
export default Sidebar;
