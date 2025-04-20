"use client";
import React from "react";
import {
  Wrapper,
  CommentItem,
  UserName,
  Content,
  ButtonWrap,
} from "./CommentsSectionStyles";
import { formatUserId } from "@/app/lib";
import { ButtonComponent, CommentModal } from "@/app/components";
import { useModal } from "@/app/lib";

type Comment = {
  content: string;
  user_id: string;
};

type CommentsSectionProps = {
  comments: Comment[];
  videoId: string;
  setComments: any;
};

//This component allows users to look through a list of comments on a particular
//video, as well as leave comments of their own.
const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  videoId,
  setComments,
}) => {
  const { openModal } = useModal();

  //Opens the CommentModal when a user clicks the button to add a comment
  const handleOpen = () => {
    openModal(<CommentModal setComments={setComments} videoId={videoId} />);
  };

  return (
    <Wrapper>
      <ButtonWrap>
        <ButtonComponent buttonText="Add a Comment" buttonClick={handleOpen} />
      </ButtonWrap>
      <ul>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <UserName>{formatUserId(comment.user_id)}</UserName>
            <Content>{comment.content}</Content>
          </CommentItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default CommentsSection;
