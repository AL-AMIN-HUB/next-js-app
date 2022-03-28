import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Header style={{ zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key={1}>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={2}>
            {" "}
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={3}>
            {" "}
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={4}>
            {" "}
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default Navbar;
