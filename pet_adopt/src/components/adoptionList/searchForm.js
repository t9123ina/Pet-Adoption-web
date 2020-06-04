import React, { useState, useEffect } from "react";
import ProtoTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Alert from "@material-ui/lab/Alert";

import { useStyles } from "../common/commonClass";
import Grid from "@material-ui/core/Grid";
const SearchForm = props => {
  const {
    animals,
    handleChange,
    onSearch,
    onRefresh,
    searchForm,
    error
  } = props;
  const classes = useStyles();
  useEffect(() => {}, [animals, searchForm]);
  return (
    <Grid container>
      <Grid item>
        <form className={classes.searchForm}>
          <TextField
            type="number"
            label="age"
            name="age"
            onChange={handleChange}
            value={searchForm.age}
          />
          <FormControl component="fieldset" onChange={handleChange}>
            <FormLabel component="legend">Animal</FormLabel>
            <RadioGroup row aria-label="type" name="type">
              <FormControlLabel
                value={0}
                control={<Radio checked={searchForm.type === 0} />}
                label="All"
              />
              {animals.map(animal => (
                <FormControlLabel
                  key={animal.id}
                  value={animal.id}
                  control={<Radio checked={searchForm.type === animal.id} />}
                  label={animal.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" onChange={handleChange}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender">
              <FormControlLabel
                value=""
                control={<Radio checked={searchForm.gender === ""} />}
                label="All"
              />
              <FormControlLabel
                value="Male"
                control={<Radio checked={searchForm.gender === "Male"} />}
                label="Male"
              />
              <FormControlLabel
                value="Female"
                control={<Radio checked={searchForm.gender === "Female"} />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </form>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            {" "}
            <IconButton onClick={onSearch}>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={onRefresh}>
              <RefreshIcon />
            </IconButton>
          </Grid>
          <Grid item>
            {error
              ? Object.values(error).map(element => (
                  <Alert severity="error">{element}</Alert>
                ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchForm;

SearchForm.protoTypes = {
  searchForm: ProtoTypes.object.isRequired,
  animals: ProtoTypes.array.isRequired,
  handleChange: ProtoTypes.func.isRequired,
  onSearch: ProtoTypes.func.isRequired,
  onRefresh: ProtoTypes.func.isRequired
};
