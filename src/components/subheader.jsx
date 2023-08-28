import React from "react";
import styled from "styled-components";

const Lines = styled.div`
  width: fit-content;
  border-top: 2px solid;
  border-bottom: 2px solid;
  padding: 15px;
  padding-right: 50px;
  padding-left: 50px;
`;

const Title = styled.div`
  font-family: Wide Latin, Georgia, Times, "Times New Roman", serif;
`;

const SubHeading = ({ title }) => {
  return (
    <Lines>
      <Title style={{ fontSize: "24px" }}>{title}</Title>
    </Lines>
  );
};

export default SubHeading;
