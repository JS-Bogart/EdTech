"use client";
import React, { useState } from "react";
import {
  ModalWrapper,
  ButtonWrapper,
  FormWrapper,
  FormGroup,
  Label,
  Input,
  TextArea,
  Headline,
  CloseButton,
} from "./CommentModalStyles";
import { ButtonComponent } from "@/app/components";
import { useModal } from "@/app/lib";
import { CloseIcon } from "@/app/public/icons";
import { getComments, formatName } from "@/app/lib";

type FormData = {
  firstname: string;
  lastname: string;
  content: string;
};

type CommentModalProps = {
  videoId: string;
  setComments: any;
};

const CommentModal: React.FC<CommentModalProps> = ({
  videoId,
  setComments,
}) => {
  const { closeModal } = useModal();

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    content: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitSuccess = () => {
    setSubmitSuccess(true);
    getComments(videoId, setComments);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstname, lastname, content } = formData;
    const userId = formatName(firstname, lastname);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        content,
        video_id: videoId,
      }),
    };
    const response = await fetch(
      "https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments",
      requestOptions
    );

    if (response.ok) {
      handleSubmitSuccess();
    }
  };

  if (submitSuccess) {
    return (
      <ModalWrapper>
        <Headline>Your comment has been posted!</Headline>
        <ButtonWrapper $position="center">
          <ButtonComponent buttonText="CLOSE" buttonClick={closeModal} />
        </ButtonWrapper>
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper>
      <ButtonWrapper $position="right">
        <CloseButton onClick={() => closeModal()}>
          <CloseIcon />
        </CloseButton>
      </ButtonWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Headline>Upload a video!</Headline>
        <FormGroup>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="content">Comments</Label>
          <TextArea
            id="content"
            name="content"
            rows={4}
            value={formData.content}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <ButtonWrapper $position="center">
          <ButtonComponent buttonText="SUBMIT" buttonClick={() => {}} />
        </ButtonWrapper>
      </FormWrapper>
    </ModalWrapper>
  );
};

export default CommentModal;
