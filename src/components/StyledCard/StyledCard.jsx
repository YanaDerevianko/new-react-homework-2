import React from "react";
import "./StyledCard.css";

export const StyledCard = (props) => {
  return (
    <div className="styled-card">
      <h2 className="component-name">Component 'StyledCard' (includes 2 components: Counter&TextContainer)</h2>
      {props.children}
    </div>
  );
};
