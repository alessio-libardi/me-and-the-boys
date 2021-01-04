import React from "react";

export const Preview = (props) => {
  const { photo, onClose, onEscape } = props;

  return (
    <Figure onClose={onClose} onEscape={onEscape}>
      <Image src={photo.url} alt={photo.label} />
      <Caption>{photo.label}</Caption>
    </Figure>
  );
};

const Figure = (props) => {
  const handleEscape = (event) => {
    if (event.isComposing || event.code === "Escape") {
      document.removeEventListener("keydown", handleEscape);

      props.onEscape();
    }
  };

  document.addEventListener("keydown", handleEscape);

  return (
    <figure
      className="fixed inset-0 bg-white dark:bg-black bg-opacity-75 z-50"
      style={{ backdropFilter: "blur(8px)" }}
    >
      {props.children}
    </figure>
  );
};

const Image = (props) => {
  const { src, alt } = props;

  return <img className="w-full h-full object-contain" src={src} alt={alt} />;
};

const Caption = (props) => {
  return (
    <figcaption className="absolute left-4 bottom-4">
      {props.children}
    </figcaption>
  );
};
