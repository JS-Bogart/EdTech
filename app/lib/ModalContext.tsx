"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import styled from "styled-components";

type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(90, 0, 60, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && <ModalOverlay>{modalContent}</ModalOverlay>}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
