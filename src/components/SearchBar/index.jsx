import debounce from "@/utils/debounce";
import DorpdownCar from "@/components/DropdownCar";
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

  return (
    <div className="d-flex align-items-center mb-3 gap-2 px-4">
      <input
        type="text"
        className="form-control border border-1 rounded-1 h-100"
        aria-label="Text input with dropdown button"
        placeholder="Realize sua busca aqui"
        onFocus={handleInputFocus}
        value={inputValue}
        // onBlur={handleInputBlur}
        onChange={(event) => {
          setInputValue(event.target.value);
          return handleSearch(event.target.value);
        }}
      />
      {console.log(inputValue)}

      <DorpdownCar
        cars={user.cars}
        productsSearch={productsSearch}
        setSearchTerm={setSearchTerm}
      />
      <Keyboard
        showKeyboard={showKeyboard}
        setModelValue={setInputValue}
      />
    </div>
  );
};

export default SearchBar;
