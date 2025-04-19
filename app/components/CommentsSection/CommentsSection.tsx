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

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  videoId,
  setComments,
}) => {
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal(<CommentModal setComments={setComments} videoId={videoId} />);
  };

  return (
    <Wrapper>
      <ButtonWrap>
        <ButtonComponent buttonText="Add a Comment" buttonClick={handleOpen} />
      </ButtonWrap>
      {comments.map((comment, index) => (
        <CommentItem key={index}>
          <UserName>{formatUserId(comment.user_id)}</UserName>
          <Content>{comment.content}</Content>
        </CommentItem>
      ))}
    </Wrapper>
  );
};

export default CommentsSection;
