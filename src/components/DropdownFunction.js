import React, { useState } from "react";
import "../styles/Dropdown.css";

const Dropdown2 = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen} className="dropdown__header">
        Dropdown header - functional
      </button>
      {isOpen && (
        <div className="dropdown__body">
          <ul>
            <li>
              <a>link2</a>
            </li>
            <li>
              <a>link2</a>
            </li>
            <li>
              <a>link3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
