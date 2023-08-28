import React from "react";
import styled from "styled-components";
import SizedBox from "./sizedBox";

const Logo = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${require("../assets/images/logo2.png")});
  background-size: cover;
  background-position: center;
`;

const Header = styled.div`
  width: fit-content;
  text-align: center;
`;

const Title = styled.div`
  font-family: Wide Latin, Georgia, Times, "Times New Roman", serif;
`;

const Heading = () => {
  return (
    <Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Logo></Logo>
      </div>
      <SizedBox height={5} />
      <Title style={{ fontSize: "32px" }}>Theories & Workings</Title>
      <SizedBox height={10} />
      <div style={{ fontSize: "24px" }}>
        Basis of Understanding, Root of Enhancements
      </div>
    </Header>
  );
};

export default Heading;
