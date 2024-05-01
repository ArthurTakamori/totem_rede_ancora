import DropdownFilter from "../DropdownFilter";
import "./styles.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="container-fluid d-flex mb-3 gap-2">
      <DropdownFilter />
      <input
        type="text"
        className="form-control border border-1 rounded-1 h-100"
        aria-label="Text input with dropdown button"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
