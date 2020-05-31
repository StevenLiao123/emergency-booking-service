import React from "react";
import PropTypes from "prop-types";
import Styles from "./ImageCard.module.css";

export const ImageCard = props => {
  return (
    <div className={Styles.container}>
      <img
        className={Styles.image}
        data-testid={`test-image-${props.imageIndex}`}
        src={props.src}
        alt={props.alt}
        onClick={() => props.callback(props.level)}
      />
    </div>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  level: PropTypes.number,
  callback: PropTypes.func,
  imageIndex: PropTypes.number
};
