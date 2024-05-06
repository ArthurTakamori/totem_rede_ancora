import debounce from "../../utils/debounce";
import DropdownFilter from "../DropdownFilter";
import "./styles.scss";

const SearchBar = ({ productsSearch, filterOption }) => {

  const handleSearch = debounce((keyword) => productsSearch({ superbusca: keyword }), 500);

  return (
    <div className="container-fluid d-flex mb-3 gap-2">
      <DropdownFilter filterOption={filterOption}/>
      <input
        type="text"
        className="form-control border border-1 rounded-1 h-100"
        aria-label="Text input with dropdown button"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
