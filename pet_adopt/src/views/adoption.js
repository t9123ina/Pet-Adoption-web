import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import ProtoTypes from "prop-types";
import PetLists from "../components/adoptionList/petsList";
import SearchForm from "../components/adoptionList/searchForm";
import Typography from "@material-ui/core/Typography";
const Adoption = props => {
  const { pets, getPets } = props;
  const [init, setInit] = useState(true);
  useEffect(() => {
    const fetchPets = () => {
      getPets();
    };
    if (init) {
      setInit(false);
      fetchPets();
    }
  }, [pets, init, getPets]);
  return (
    <Container>
      <Typography variant="h4" component="h4">
        Pet Available For Adoption
      </Typography>
      <SearchForm />
      <PetLists pets={pets} />
    </Container>
  );
};

export default Adoption;

Adoption.protoTypes = {
  pets: ProtoTypes.array.isRequired,
  getPets: ProtoTypes.func.isRequired
};
