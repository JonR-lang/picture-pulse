import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const icon = document.querySelector('[name="grid-outline"]');
    setMenuIcon(icon);
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (searchWhat) => {
    navigate(`/search/${searchWhat}`);
  };

  const openMenu = () => {
    if (menuIcon) {
      menuIcon.classList.add("active");
    }
  };

  const closeMenu = () => {
    menuIcon.classList.remove("active");
  };

  return (
    <header>
      <nav className='header__nav'>
        <h1 className='header__h1'>PicturePulse</h1>
        <form
          className='header__form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchValue);
          }}>
          <input
            type='text'
            placeholder='Search movie'
            value={searchValue}
            onChange={handleChange}
          />
          <ion-icon
            onClick={() => {
              handleSearch(searchValue);
            }}
            className='header__search'
            name='search-outline'></ion-icon>
        </form>
        <ion-icon onClick={openMenu} name='grid-outline'></ion-icon>
        <ul className='header__ul'>
          <li onClick={closeMenu}>
            <NavLink className='header__navlink' to='/'>
              Home
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink className='header__navlink' to='categories'>
              Categories
            </NavLink>
          </li>
          <ion-icon onClick={closeMenu} name='close-outline'></ion-icon>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
