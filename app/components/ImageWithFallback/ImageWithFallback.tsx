"use client";
import Image from "next/image";
import { useState } from "react";
import {
  VideoWrap,
  ImageWrap,
  TextWrap,
  VideoText,
  Fallback,
  OverlayPlayButton,
  OverlayInner,
} from "./ImageWithFallbackStyles";

interface ImageWithFallbackProps {
  imageUrl: string;
  altText: string;
  preload: boolean;
  title: string;
}

//This component adds fallback functionality to next/image for when the src url
//leads to a broken image
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  imageUrl,
  altText,
  preload,
  title,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <VideoWrap>
      <ImageWrap>
        {imageError ? (
          <Fallback>
            <OverlayPlayButton>
              <OverlayInner>▶</OverlayInner>
            </OverlayPlayButton>
          </Fallback>
        ) : (
          <Image
            src={imageUrl}
            fill={true}
            alt={altText}
            sizes="(max-width: 740px) 95vw, (max-width: 1000px) 48vw, (max-width: 1260px) 32vw, 24vw"
            priority={preload}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            onError={() => setImageError(true)}
          />
        )}
        <TextWrap>
          <VideoText>{title}</VideoText>
        </TextWrap>
      </ImageWrap>
    </VideoWrap>
  );
};

export default ImageWithFallback;
