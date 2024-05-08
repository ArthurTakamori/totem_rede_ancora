import debounce from "../../utils/debounce";
import DorpdownCar from "../../components/DropdownCar";

const SearchBar = ({ productsSearch, user, setSearchTerm }) => {
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
        onChange={(event) => handleSearch(event.target.value)}
      />

      <DorpdownCar
        cars={user.cars}
        productsSearch={productsSearch}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
};

export default SearchBar;
