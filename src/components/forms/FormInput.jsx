import React, { useState } from "react";
import { ReactComponent as HidePassword } from "../../assets/icons/hide-password.svg";
import { ReactComponent as ShowPassword } from "../../assets/icons/show-password.svg";

function FormInput({ onInput, formValue = "", children }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prevState) => !prevState);
  }

  const password = children === "Password" ? true : false;
  return (
    <div className="form-input">
      <label>{children}</label>
      <div className={`input-field ${isFocused ? "focus" : ""}`}>
        <input
          type={!showPassword ? "password" : "text"}
          name={children}
          value={formValue}
          className="form-input-field"
          placeholder={`${children}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onInput(e.target.value)}
        />
        {password && (
          <div
            className={`hide-show-password ${isFocused ? "fill-svg" : ""}`}
            onClick={handleShowPassword}
          >
            {showPassword ? <ShowPassword /> : <HidePassword />}
          </div>
        )}
      </div>
    </div>
  );
}

export default FormInput;
