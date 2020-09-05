import React, { useState } from "react";
// import { Menu } from "antd";
import {
  HomeFilled,
  RadarChartOutlined,
  PictureFilled,
  FileExclamationFilled,
  NodeExpandOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HeaderTag, NavItems, ButtonNav, ItemMenu } from "./styles";

// const { Item } = Menu;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // handleClick = (e) => {
  //   this.setState({ current: e.key });
  // };

  return (
    // <HeaderTag aria-hidden="true">
    <>
      <ButtonNav onClick={() => setIsOpen(!isOpen)}>
        <MinusOutlined />
        <MinusOutlined />
        <MinusOutlined />
      </ButtonNav>
      <NavItems aria-hidden={!isOpen} isOpen={isOpen}>
        <ItemMenu>Home</ItemMenu>
        <ItemMenu>Universe</ItemMenu>
        <ItemMenu>Space News</ItemMenu>
        <ItemMenu>Astronomy Picture</ItemMenu>
        <ItemMenu>About</ItemMenu>

        {/* <Menu selectedKeys={[current]} mode="horizontal"> */}
        {/* <Item key="home" icon={<HomeFilled />}>
              <Link to="/">Space Hunter</Link>
            </Item>

            <Item key="universe" icon={<RadarChartOutlined />}>
              <Link to="/universe">Universe</Link>
            </Item>

            <Item key="articles" icon={<FileExclamationFilled />}>
              <Link to="/news">Space News</Link>
            </Item>

            <Item key="apod" icon={<PictureFilled />}>
              <Link to="/apod">Astronomy Picture</Link>
            </Item>

            <Item key="about" icon={<NodeExpandOutlined />}>
              <Link to="/about">About</Link>
            </Item> */}
        {/* </Menu> */}
      </NavItems>
    </>
    // </HeaderTag>
  );
};
export default Menu;
