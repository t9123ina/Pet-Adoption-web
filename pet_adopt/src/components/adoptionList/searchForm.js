import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { useStyles } from "../common/commonClass";
import Grid from "@material-ui/core/Grid";
const SearchForm = props => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <form className={classes.searchForm}>
          <TextField label="name" />
          <TextField type="number" label="age" />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="animal" name="animal">
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="dog" control={<Radio />} label="Dogs" />
              <FormControlLabel value="cat" control={<Radio />} label="Cats" />
            </RadioGroup>
          </FormControl>
        </form>
      </Grid>
      <Grid item>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
