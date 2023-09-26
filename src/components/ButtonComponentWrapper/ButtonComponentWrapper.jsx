import React from "react";
import { ButtonComponent } from "./ButtonComponent/ButtonComponent";

export const ButtonComponentWrapper = () => {
  return (
    <div>
      <ButtonComponent>
        <p>😀</p>
        <p className="text-btn">GO!</p>
      </ButtonComponent>
    </div>
  );
};
