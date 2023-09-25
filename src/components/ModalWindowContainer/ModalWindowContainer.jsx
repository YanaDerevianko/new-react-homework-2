import React from "react";
import { ModalWindow } from "./ModalWindow/ModalWindow";

export const ModalWindowContainer = () => {
  return (
    <div>
      <ModalWindow>
        <h2> It's my Modal Window</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          assumenda atque perferendis. Consequuntur cumque asperiores assumenda
          reprehenderit totam quia.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          assumenda atque perferendis.
        </p>
      </ModalWindow>
    </div>
  );
};
