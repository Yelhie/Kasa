import arrowUp from "../../assets/arrow_up.webp";
import arrowDown from "../../assets/arrow_down.webp";
import { useState } from "react";
import "./collapse.scss";

export const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleTitle() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="collapse_container">
      <h3 className="collapse_title" onClick={toggleTitle}>
        {title}
        <img src={isExpanded ? arrowUp : arrowDown} alt="Arrow" />
      </h3>
      <div className={`toggle_text_container ${isExpanded ? "expanded" : ""}`}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          : content}
      </div>
    </div>
  );
};
