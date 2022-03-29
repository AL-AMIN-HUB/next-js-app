import { Button, Card, DatePicker, Image, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const onChange = () => {};
  return (
    <div div style={{ padding: "10px", textAlign: "center" }}>
      <h1>
        Welcome to <span className={styles.title}>Next js</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perspiciatis perferendis nisi exercitationem corrupti saepe consectetur
        quam, provident a aliquid.
      </p>
      <div style={{ padding: 100 }}>
        <Space direction="vertical">
          <Button type="primary">Primary Button</Button>
          <Button type="ghost">Ghost Button</Button>
          <DatePicker onChange={onChange} />
        </Space>
      </div>
      <Card
        hoverable
        style={{ width: 240, margin: "0 auto" }}
        cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default Home;
