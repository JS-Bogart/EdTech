"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  background-color: rgba(90, 0, 60);
  background-color: rgba(90, 0, 60, 0.6);
  border-radius: 8px;
  border: 3px solid #5a003c;
  width: 80vw;
  padding-bottom: 20px;

  @media only screen and (max-width: 1000px) {
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 800px) {
    width: 85vw;
  }
  @media only screen and (max-width: 500px) {
    width: 90vw;
  }
`;

export const CommentItem = styled.li`
  padding: 12px;
  margin-bottom: 10px;
  background-color: #a0dcff;
  border: 3px solid #5a003c;
  border-radius: 6px;
  list-style: none;
`;

export const UserName = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  color: #5a003c;
`;

export const Content = styled.div`
  color: #5a003c;
  font-size: 14px;
`;

export const ButtonWrap = styled.div`
  & button {
    margin: 20px 0px;
  }
`;
