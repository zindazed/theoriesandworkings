import React from "react";
import styled, { css } from "styled-components";
import SizedBox from "./sizedBox";

const Thumbnail = styled.div`
  ${({ thumbnail }) => css`
    height: 140px;
    width: 240px;
    background-image: url(${thumbnail});
    background-size: cover;
    background-position: center;
  `}
`;

const Content = styled.div`
  width: fit-content;
  text-align: center;
`;

const ContentTitle = styled.div``;

const Creation = ({ thumbnail, title }) => {
  return (
    <Content>
      <Thumbnail thumbnail={thumbnail} />
      <SizedBox height={5} />
      <ContentTitle>{title}</ContentTitle>
    </Content>
  );
};

export default Creation;
