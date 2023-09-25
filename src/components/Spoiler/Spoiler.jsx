import React from "react";
import { useState } from "react";
import "./Spoiler.css";

export const Spoiler = () => {
  const [isSpoilerVisible, setSpoilerVisible] = useState(false);

  const clickHandler = () => {
    setSpoilerVisible(true);
  };

  return (
    <div className="component-wrapper">
      <h2 className="component-name">Component 'Spoiler'</h2>

      <p className="spoiler-title" onClick={clickHandler}>
        <u>"The Ultimate Confrontation" (2023)</u>
      </p>
      {isSpoilerVisible && (
        <p className="spoiler-text">
          In the thrilling climax of the movie, the hero narrowly escapes a
          deadly trap and uncovers the shocking truth about the mysterious
          antagonist's identity, setting the stage for an epic showdown that
          will leave you on the edge of your seat...
        </p>
      )}
    </div>
  );
};
