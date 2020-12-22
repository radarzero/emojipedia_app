import React from "react";
import "./contact.css";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function handleSubmit(e: any) {
  e.preventDefault();
  // fetch("testurl.com/contactme", {
  //   method: "post",
  //   body: JSON.stringify({
  //     username: data.name,
  //     message: data.message ,
  //   }),
  // }).then(function (res) {
  //   console.log(res.text);
  // });

  // try {
  //   history.push("/home");
  // } catch (e) {
  //   alert(e.message);
  // }
}

function Contact() {
  return (
    <div className="damon">
        <h3>Contact us!!!!</h3>
        <h2>Communication is a way to evolve!!!!</h2>

      <Form {...layout} name="nest-messages" onFinish={handleSubmit} id='contactForm'>
        <Form.Item
          name={["user", "name"]}
          rules={[{ required: true }]}
          className="margin-all"
        >
          <Input placeholder='Name' name='userName' />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          rules={[{ type: "email" }]}
          className="margin-all"
        >
          <Input placeholder='Email' name='email' />
        </Form.Item>
        <Form.Item  className="margin-all">
          <Input.TextArea placeholder='Message' name='message' />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="centeralign">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
