import "./index.scss";
import searchLogo from "../../assets/search.png";


const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img
          src={searchLogo}
          alt="search logo"
          className="search__search-logo"
        />
        <input type="text" placeholder="O que você está procurando?" />
      </div>
    </div>
  );
};

export default Search;