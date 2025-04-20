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
} from "./ContributeModalStyles";
import { ButtonComponent } from "@/app/components";
import { useModal, useVideoList } from "@/app/lib";
import { CloseIcon } from "@/app/public/icons";

type FormData = {
  title: string;
  description: string;
  video_url: string;
};

//This component contains the content of the modal that opens when uploading a
//video. It contains a form where users add the video title, a description of the
//video, and a url for the video.
const ContributeModal = () => {
  const { closeModal } = useModal();
  const { getVideoList } = useVideoList();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    video_url: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  //Handles changes to the form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //Upon a successful upload, this function logs the success and fetches the
  //updated list of videos
  const handleSubmitSuccess = () => {
    setSubmitSuccess(true);
    getVideoList();
  };

  //When the submit button is clicked, this function sends the post request
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description, video_url } = formData;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: "jeffrey_bogart",
        title,
        description,
        video_url,
      }),
    };
    const response = await fetch(
      "https://take-home-assessment-423502.uc.r.appspot.com/api/videos",
      requestOptions
    );

    if (response.ok) {
      handleSubmitSuccess();
    }
  };

  //Once a video has been successfully uploaded, this element is returned, prompting
  //the user to close the modal.
  if (submitSuccess) {
    return (
      <ModalWrapper>
        <Headline>Your video was successfully uploaded!</Headline>
        <ButtonWrapper $position="center">
          <ButtonComponent buttonText="CLOSE" buttonClick={closeModal} />
        </ButtonWrapper>
      </ModalWrapper>
    );
  }

  //This returns the form for users to fill out when uploading a video.
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
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="video_url">Video URL</Label>
          <Input
            type="url"
            id="video_url"
            name="video_url"
            value={formData.video_url}
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

export default ContributeModal;
