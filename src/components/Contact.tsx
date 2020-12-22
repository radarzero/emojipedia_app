import React from "react";
import "./contact.css";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function handleSubmit(e: any) {
  e.preventDefault();
}

function Contact() {
  return (
    <div className="damon">
        <h3>Contact us!!!!</h3>
        <h2>Have something to tell us go ahead</h2>

      <Form {...layout} name="nest-messages" onFinish={handleSubmit}>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
          className="margin-all"
        >
          <Input placeholder='Name'/>
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
          className="margin-all"
        >
          <Input placeholder='Email'/>
        </Form.Item>
        <Form.Item label="Message" className="margin-all">
          <Input.TextArea placeholder='Message' />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="centeralign">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
