import React, { memo } from 'react'; 
import "../styles/Button.css";

function Button({ children, className = "", type = "button", role = "button", value = "", onClick }) {
  return (
    <button
      type={type}
      className={`button-50 ${className}`}
      role={role}
      onClick={onClick}
    >
      {value || children}
    </button>
  );
}

export default memo(Button);
