import React from "react";

const Filter = ({ onKeyup, selectOption }) => {

  function toggleOptions(e) {
    e.preventDefault();
    const options = document.getElementById("options");
    const arrowIcon = document.getElementById("arrow-icon")

    if (options.classList.contains("visible")) {
      options.classList.remove("visible");
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      options.classList.add("visible");
      arrowIcon.style.transform = "rotate(360deg)";
    }
  }

/*   function selectOption(e) {
    console.log(e.target.getAttribute("value"));
  } */

  return (
    <div className="filter">
      <div className="searchbox">
        <i id="search-icon" class="fas fa-search search-icon"></i>
        <input
          type="text"
          id="searchInput"
          onInput={(e) => onKeyup(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>

      <div className="dropdown">
        <a className="select" href="#" onClick={toggleOptions}>
          <p>Filter by Region</p>
          <i id="arrow-icon" class="fas fa-chevron-down"></i>
        </a>
        <div className="options" id="options">
          <div className="option" value="Africa" onClick={selectOption}>Africa</div>
          <div className="option" value="Americas" onClick={selectOption}>America</div>
          <div className="option" value="Asia" onClick={selectOption}>Asia</div>
          <div className="option" value="Europe" onClick={selectOption}>Europe</div>
          <div className="option" value="Oceania" onClick={selectOption}>Oceania</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
