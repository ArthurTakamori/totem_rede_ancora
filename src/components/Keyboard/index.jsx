import { bottom } from "@popperjs/core";
import { useEffect, useState } from "react";

export default function Keyboard({ setModelValue, showKeyboard, handleEnterKeyboard, maxLength, modelValue, uppercase, preventSpace }) {
  const [isVisible, setIsVisible] = useState(true);

  const BACKSPACE = "backspace";
  const SPACE = "space";
  const ENTER = "enter";

  const keys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    [null, "z", "x", "c", "v", "b", "n", "m", BACKSPACE],
    [null, null, SPACE, ENTER],
  ];

  const handleKeyPress = (key) => {

    if (key === BACKSPACE) {
      setModelValue((current) => current.slice(0, -1));
      return;
    }

    if (key === ENTER) {
      handleEnterKeyboard()
      return;
    }

    if(modelValue) {
      if(modelValue.length === maxLength) return;
    }
    
    if (key === SPACE) {
      if(preventSpace === true) return;
       
      setModelValue((current) => current + " ");
      return;
    }

    const newValue = uppercase ? key.toUpperCase() : key;

    setModelValue((current) => current + newValue);
  };

  const handleClick = (event) => {
    if (event.target.className.includes("container-main")) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);

    if (showKeyboard) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      if (showKeyboard) {
        document.removeEventListener("click", handleClick);
      }
    };
  }, [showKeyboard]);

  return (
    <>
      <div
        className={`fixed-bottom ${
          showKeyboard && isVisible ? "d-block" : "d-none"
        }`}
        style={{zIndex: '2001'}}
      >
        <div
          className="bg-white border w-100 text-white d-flex align-items-strech justify-content-center shadow-lg py-4 px-3"
          style={{ minHeight: "40vh", zIndex: "20" }}
        >
          <div className="flex-grow-1 d-flex flex-column justify-content-around">
            {keys.map((items, index) => (
              <ul
                key={index}
                className={`d-flex align-items-center justify-content-center w-100  
                    ${index === 1 ? "px-4" : ""} 
                    ${index === 2 ? "px-5" : ""} 
                    ${index === 4 ? "px-2" : ""}`}
              >
                {items.map((key, subIndex) => (
                  <li
                    key={subIndex}
                    className={`m-2 d-flex rounded-1
                        ${index + 1 === keys.length ? "" : "col"} 
                        ${key === SPACE ? "w-100" : ""}`}
                    style={{ minHeight: "60px", minWidth: "20px" }}
                    onClick={() => handleKeyPress(key)}
                  >
                    {(() => {
                      if (key === SPACE) {
                        return (
                          <span className="text-center rounded-2 keyboard border d-flex align-items-center justify-content-center w-100 p-2"></span>
                        );
                      }

                      if (key === BACKSPACE) {
                        return (
                          <span className="mgc_delete_back_fill text-center rounded-2 keyboard d-flex align-items-center justify-content-center p-2 w-100 fs-2"></span>
                        );
                      }

                      if (key === ENTER) {
                        return (
                          <span className="text-center rounded-2 keyboard d-flex align-items-center justify-content-center px-5 w-100 fw-medium fs-4 gap-2">
                            <span className="mgc_down_line fs-2"></span>
                            Fechar
                          </span>
                        );
                      }

                      if (key === null) {
                        return <span></span>;
                      }

                      return (
                        <span className="text-center rounded-2 keyboard d-flex align-items-center justify-content-center p-2 w-100 fw-medium fs-2">
                          {key}
                        </span>
                      );
                    })()}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
