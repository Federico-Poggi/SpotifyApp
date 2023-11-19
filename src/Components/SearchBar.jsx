import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
const SearchBar = () => {
  return (
    <InputGroup className="my-3">
      <FormControl type="search" placeholder="Search" />
      <Button className="bg-transparent border-light">
        <Search />
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
