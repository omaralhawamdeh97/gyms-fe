import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for a class"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
