import DropdownFilter from "../DropdownFilter";
import "./styles.scss"

const SearchBar = () => {
  return (
    <div className="input-group mb-3 gap-5">
      <DropdownFilter />
      <input
        type="text"
        className="form-control border border-1 rounded-2 h-100"
        aria-label="Text input with dropdown button"
      />
    </div>
  );
};

export default SearchBar;
