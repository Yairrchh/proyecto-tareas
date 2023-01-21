import React from "react";
import { ReactComponent as CheckSVG } from './error.png';
import { ReactComponent as DeleteSVG } from './success.png';
import './style.css'

const iconTypes = {
    "check": color => (
      <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
      <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
  };

function TodoIcon({type, color = 'gray', onClick}) {
    return (
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onclick}    
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}