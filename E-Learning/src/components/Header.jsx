import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [showLogIn, setShowLogIn] = useState(false);

  const handleShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div>
      <header>
        <nav>
          <Link
            to="/"
            style={{
              margin: "0",
              color: "white",
              fontSize: "32px",
              textDecoration: "none",
            }}
          >
            Meaningful Learning
          </Link>
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search..."
              value={search}
              onChange={updateSearch}
            />
            <button type="submit">Search</button>
          </form>
          <Link to="/login" className="log-in" onClick={handleShowLogIn}>
            Log In
          </Link>
        </nav>
      </header>
      <div className="header-img"></div>
    </div>
  );
}

export default Header;
