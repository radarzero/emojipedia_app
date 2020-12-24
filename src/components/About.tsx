import React from "react";
import { Row, Col } from "antd";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <Row gutter={[8, 8]} className='margin-Top'>
        <Col span={12} className="damon">
          <img
            src="https://i.pinimg.com/236x/25/27/77/25277734f2edac424faf7efb8ff4abc7.jpg"
            alt="Makishima Shogo"
          />
        </Col>
        <Col span={12} className="damon">
          <h1>short</h1>
          <h3>
            this is a simple webiste to give you Knowledge about emoji
            meanings!!!
          </h3>
          <h3>
            for us it's great dilemma that people uses emoji without knowing
            what it actually means.
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default About;
