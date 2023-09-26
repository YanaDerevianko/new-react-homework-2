import React from "react";


export const CommentComponent = (props) => {
  return (
    <div className="component-wrapper">
      <h2 className="component-name">Component 'CommentComponent'</h2>
      {props.children}
    </div>
  );
};
