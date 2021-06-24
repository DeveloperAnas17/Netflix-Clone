import React from "react";
import styled from "styled-components";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import SearchIcon from "@material-ui/icons/Search";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <Container>
      <Left>
        <ChevronIcon>
          <ChevronLeftOutlinedIcon className="active" />
          <ChevronRightOutlinedIcon />
        </ChevronIcon>

        <Search>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </Search>
      </Left>
      <Right>
        <NotificationsOutlinedIcon />
        <SmsOutlinedIcon />
        <User />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222328;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
`;

const ChevronIcon = styled.div`
  .active {
    color: #f5f5ff !important;
  }

  .MuiSvgIcon-root {
    font-size: 25px !important;
    margin-left: 3px;
    color: #717489 !important;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #717489;
  padding: 6px 18px;
  border-radius: 20px;
  margin-left: 20px;

  .MuiSvgIcon-root {
    color: #717489 !important;
  }

  input {
    border: none;
    outline-width: 0;
    background: none;
    padding: 6px;
    color: #717489;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  .MuiSvgIcon-root {
    color: #717489 !important;
    margin: 0 12px;
    cursor: pointer;

    &:hover {
      color: #f5f4ff !important;
    }
  }
`;

const User = styled(Avatar)`
  margin-left: 20px;
`;
export default Header;
