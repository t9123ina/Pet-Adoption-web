import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProtoTypes from "prop-types";
import PetLists from "../components/adoptionList/petsList";
import SearchForm from "../components/adoptionList/searchForm";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../components/common/commonClass";

const Adoption = props => {
  const classes = useStyles();

  const { pets, getPets, getPet, pet, getAnimals, animals } = props;
  const [searchForm, setSearchForm] = useState({
    age: 0,
    type: 0,
    gender: ""
  });
  const [error, setError] = useState(null);
  const onSearch = () => {
    var query = Object.assign({}, searchForm);
    if (query.age !== 0) {
      if (query.type === 0) {
        delete query["type"];
      }
      if (query.gender === "") {
        delete query["gender"];
      }
      getPets(query);
      setError(null);
    } else {
      setError({ age: "Age must be order than 0 year old" });
    }
  };
  const onRefresh = () => {
    getPets();
    setSearchForm(Object.assign({}, { age: 0, type: 0, gender: "" }));
    setError(null);
  };
  const handleChange = event => {
    const { name, value } = event.target;

    var updateForm = searchForm;
    updateForm[name] = isNaN(parseInt(value)) ? value : parseInt(value);
    setSearchForm(Object.assign({}, updateForm));
  };
  const [init, setInit] = useState(true);
  useEffect(() => {
    const fetchPets = () => {
      getPets();
      getAnimals();
    };
    if (init) {
      setInit(false);
      fetchPets();
    }
  }, [pets, init, getPets, pet, getAnimals, animals]);
  return (
    <Container className={classes.container}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h4" component="h4">
            We provide an easy way for you to adopt a pet.
          </Typography>
          <Typography variant="h4" component="h4" className={classes.subTitle}>
            Just fill out the form and we will inform you ASAP.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <SearchForm
            animals={animals}
            searchForm={searchForm}
            handleChange={handleChange}
            onSearch={onSearch}
            onRefresh={onRefresh}
            error={error}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <PetLists pets={pets} getPet={getPet} pet={pet} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Adoption;

Adoption.protoTypes = {
  animals: ProtoTypes.array.isRequired,
  getAnimals: ProtoTypes.func.isRequired,
  pets: ProtoTypes.array.isRequired,
  pet: ProtoTypes.object.isRequired,
  getPets: ProtoTypes.func.isRequired,
  getPet: ProtoTypes.func.isRequired
};
