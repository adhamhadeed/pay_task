import React, { useCallback, useState } from "react";
import useEventListener from "../customhook/useEventListener";

import "./index.scss";

const ImgTemplate = ({
  id,
  thumbnailUrl,
  url,
  title,
  onRemoveImg,
  openModal,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleMouseToggle = useCallback(
    (toggle) => {
      setToggle(toggle);
    },
    [setToggle]
  );

  useEventListener("mouseenter", handleMouseToggle);
  useEventListener("mouseleave", handleMouseToggle);

  return (
    <div className="img_template">
      <div className="img_template__header" onClick={() => onRemoveImg(id)}>
        x
      </div>
      <img
        src={thumbnailUrl}
        alt="missing"
        onMouseEnter={() => handleMouseToggle(true)}
        onMouseLeave={() => handleMouseToggle(false)}
        onClick={() => openModal(url)}
      />
      <div
        className={`img_template__slidein__title ${toggle ? "slide-in" : ""}`}
      >
        {title}
      </div>
    </div>
  );
};

export default ImgTemplate;
