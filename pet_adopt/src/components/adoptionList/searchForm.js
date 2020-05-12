import React from "react";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
const SearchForm = props => {
  return (
    <form>
      <TextField label="name" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchForm;
