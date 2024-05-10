import debounce from "@/utils/debounce";
import DropdownCar from "@/components/DropdownCar";
import Keyboard from "../Keyboard";
import { useState } from "react";

const SearchBar = ({ productsSearch, user, setSearchTerm }) => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputFocus = () => {
    setShowKeyboard(true);
  };

  const handleInputBlur = () => {
    setShowKeyboard(false);
  };

  const handleSearch = debounce((keyword) => {
    return setSearchTerm((prevState) => ({
      ...prevState,
      superbusca: keyword,
    }));
  }, 500);

  const handleEnterKeyboard = () => {
    handleInputBlur();
  } 

  return (
    <div className="d-flex align-items-center mb-3 gap-2">
      <input
        type="text"
        className="form-control border border-1 rounded-1 h-100"
        aria-label="Text input with dropdown button"
        placeholder="Realize sua busca aqui"
        onFocus={handleInputFocus}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          return handleSearch(event.target.value);
        }}
      />

      <DropdownCar
        cars={user.cars}
        productsSearch={productsSearch}
        setSearchTerm={setSearchTerm}
      />

      <Keyboard
        showKeyboard={showKeyboard}
        setModelValue={setInputValue}
        handleEnterKeyboard={handleEnterKeyboard}
      />
    </div>
  );
};

export default SearchBar;
