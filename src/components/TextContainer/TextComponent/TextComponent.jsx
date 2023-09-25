import React from "react";

export const TextComponent = (props) => {
  return (
    <div className="component-wrapper">
      <h2 className="component-name">Component 'TextComponent'</h2>
      {props.children}
    </div>
  );
};
