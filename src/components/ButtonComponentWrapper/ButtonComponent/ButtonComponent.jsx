import React from 'react';
import "./ButtonComponent.css";

export const ButtonComponent = (props) => {
  return (
    <div className="component-wrapper">
        <h2 className="component-name">Component 'ButtonComponent'</h2>
        <button className='icon-button'>{props.children}</button>
    </div>
  )
}

