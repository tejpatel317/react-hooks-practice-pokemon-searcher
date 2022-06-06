import React from "react";

function Search({userSearch, setUserSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={userSearch} onChange={(e) => setUserSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
