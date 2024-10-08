import React, { useState, Fragment } from "react";
import MetaData from "../layout/Metadata";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/events/${keyword}`);
    } else {
      history.push("/events");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Event -- EVENT" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Event ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;