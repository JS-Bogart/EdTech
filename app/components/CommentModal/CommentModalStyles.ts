"use client";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: #a0dcff;
  padding: 1rem;
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
  border: 5px solid #5a003c;
`;

export const FormWrapper = styled.form`
  padding: 1rem;
`;

export const CloseButton = styled.button`
  background: #a0dcff;
  border: 3px solid #5a003c;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #5a003c;
  }
  &:hover path {
    fill: #a0dcff;
  }
`;

export const Headline = styled.h2`
  font-family: "Orienta", sans-serif;
  color: #5a003c;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ButtonWrapper = styled.div<{ $position: "center" | "right" }>`
  display: flex;
  justify-content: ${(props) => props.$position || "center"};
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: left;
  color: #5a003c;
  font-family: "Orienta", sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #5a003c;
  border-radius: 8px;
  font-size: 1rem;
  color: black;
  background-color: white;
  font-family: "Orienta", sans-serif;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #5a003c;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  color: black;
  background-color: white;
  font-family: "Orienta", sans-serif;
`;
