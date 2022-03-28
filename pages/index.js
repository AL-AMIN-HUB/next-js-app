import { Button, Space, DatePicker, Card } from "antd";

const index = () => {
  const onChange = () => {};
  return (
    <>
      <h1>Hello World</h1>
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
      <Card style={{ backgroundColor: "#111", color: "#fff", width: "400px", margin: "0 auto" }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, debitis.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia similique labore beatae ipsum est, praesentium cupiditate natus culpa
          quod? Recusandae vitae voluptas sint. Quod maiores, ullam omnis aperiam ratione architecto.
        </p>
      </Card>
    </>
  );
};

export default index;
