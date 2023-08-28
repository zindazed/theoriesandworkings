import React from "react";
import styled from "styled-components";
import Heading from "./components/header";
import SizedBox from "./components/sizedBox";
// import SubHeading from "./components/subheader";
import Slider from "./components/Slider";

const Container = styled.div`
  color: black;
`;

const BackgroundImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${require("./assets/images/uifuture.jpg")});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;

const Shade = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.5;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;

function App() {
  return (
    <Container>
      <BackgroundImage></BackgroundImage>
      <Shade></Shade>
      <SizedBox height={10} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading />
      </div>
      <SizedBox height={30} />
      <span className="slider-html">
        <span className="slider-body my-3">
          <Slider />
        </span>
      </span>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <SubHeading title={"Creator"} />
      </div> */}
    </Container>
  );
}

export default App;
