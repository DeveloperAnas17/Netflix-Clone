import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
// import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
// import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import { Avatar } from "@material-ui/core";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <Container>
      <Left>
        <Logo>
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix logo"
          />
        </Logo>
        <Search>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </Search>
      </Left>
      <Right>
        {/* <Icons>
          <NotificationsOutlinedIcon />
          <SmsOutlinedIcon />
        </Icons> */}
        <User />
        <Menu>
          <CustomMenu onClick={() => setBurgerMenu(true)} />
        </Menu>

        <BurgerNav show={burgerMenu}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerMenu(false)} />
          </CloseWrapper>

          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadastar</a>
          </li>

          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
        </BurgerNav>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 90;
  padding: 10px 0;
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

const Logo = styled.div`
  h3 {
    color: white;
  }

  img {
    width: 100px;
  }
`;

const Menu = styled.div``;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: #f1f7f8;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 300px;
  padding: 20px;
  /* display: flex; */
  display: none;
  flex-direction: column;
  text-align: start;
  /* transform: ${(props) =>
    props.show ? "translateX(0)" : "translateX(100%)"}; */
  transition: transform 0.3s ease-in-out;
  li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid #f1f4ff;

    a {
      font-weight: 600;
      text-transform: uppercase;
      color: #f1f4ff;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  color: white;
  cursor: pointer;
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
`;

// const Icons = styled.div`
//   display: flex;

//   .MuiSvgIcon-root {
//     color: #717489 !important;
//     margin: 0 10px;
//     cursor: pointer;

//     &:hover {
//       color: #f5f4ff !important;
//     }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

const User = styled(Avatar)`
  margin: 0 10px;
`;

export default Header;
